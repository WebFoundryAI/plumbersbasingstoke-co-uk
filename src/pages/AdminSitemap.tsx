import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Download, RefreshCw, Check, FileText } from "lucide-react";
import { SERVICES } from "@/config/services";
import { LOCATIONS } from "@/config/locations";
import { BRAND } from "@/config/brand";

interface BlogPost {
  slug: string;
  updated_at: string;
}

const AdminSitemap = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedXml, setGeneratedXml] = useState<string | null>(null);

  const { data: blogPosts } = useQuery({
    queryKey: ["admin-sitemap-blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("slug, updated_at")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as BlogPost[];
    },
  });

  const formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0];
  };

  const generateUrlEntry = (
    loc: string,
    priority: string,
    changefreq: string,
    lastmod?: string
  ): string => {
    return `  <url>
    <loc>https://${BRAND.domain}${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  };

  const generateSitemap = () => {
    setIsGenerating(true);
    
    try {
      const today = formatDate(new Date());
      const urls: string[] = [];

      // Static pages
      const staticPages = [
        { url: "/", priority: "1.0", changefreq: "weekly" },
        { url: "/services", priority: "0.9", changefreq: "weekly" },
        { url: "/locations", priority: "0.9", changefreq: "weekly" },
        { url: "/about", priority: "0.7", changefreq: "monthly" },
        { url: "/contact", priority: "0.8", changefreq: "monthly" },
        { url: "/faq", priority: "0.6", changefreq: "monthly" },
        { url: "/blog", priority: "0.7", changefreq: "daily" },
        { url: "/sitemap", priority: "0.5", changefreq: "weekly" },
        { url: "/privacy", priority: "0.3", changefreq: "yearly" },
        { url: "/terms", priority: "0.3", changefreq: "yearly" },
        { url: "/cookies", priority: "0.3", changefreq: "yearly" },
      ];

      for (const page of staticPages) {
        urls.push(generateUrlEntry(page.url, page.priority, page.changefreq, today));
      }

      // Service pages
      for (const service of SERVICES) {
        urls.push(generateUrlEntry(`/services/${service.slug}`, "0.8", "weekly", today));

        // Sub-service pages
        for (const sub of service.subServices || []) {
          urls.push(
            generateUrlEntry(`/services/${service.slug}/${sub.slug}`, "0.7", "weekly", today)
          );
        }
      }

      // Location pages
      for (const location of LOCATIONS) {
        urls.push(generateUrlEntry(`/location/${location.slug}`, "0.8", "weekly", today));

        // Service-in-location pages
        for (const service of SERVICES) {
          urls.push(
            generateUrlEntry(
              `/location/${location.slug}/${service.slug}`,
              "0.7",
              "weekly",
              today
            )
          );

          // Sub-service-in-location pages
          for (const sub of service.subServices || []) {
            urls.push(
              generateUrlEntry(
                `/location/${location.slug}/${service.slug}/${sub.slug}`,
                "0.6",
                "weekly",
                today
              )
            );
          }
        }
      }

      // Blog posts
      if (blogPosts && blogPosts.length > 0) {
        for (const post of blogPosts) {
          const lastmod = post.updated_at
            ? formatDate(new Date(post.updated_at))
            : today;
          urls.push(generateUrlEntry(`/blog/${post.slug}`, "0.6", "monthly", lastmod));
        }
      }

      // Generate XML
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

      setGeneratedXml(xml);
      toast({
        title: "Sitemap Generated",
        description: `Generated sitemap with ${urls.length} URLs`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate sitemap",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadSitemap = () => {
    if (!generatedXml) return;

    const blob = new Blob([generatedXml], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sitemap.xml";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Downloaded",
      description: "sitemap.xml has been downloaded",
    });
  };

  const copyToClipboard = () => {
    if (!generatedXml) return;
    
    navigator.clipboard.writeText(generatedXml);
    toast({
      title: "Copied",
      description: "Sitemap XML copied to clipboard",
    });
  };

  // Count URLs
  const staticCount = 11;
  const serviceCount = SERVICES.length;
  const subServiceCount = SERVICES.reduce((acc, s) => acc + (s.subServices?.length || 0), 0);
  const locationCount = LOCATIONS.length;
  const serviceLocationCount = LOCATIONS.length * SERVICES.length;
  const subServiceLocationCount = LOCATIONS.length * subServiceCount;
  const blogCount = blogPosts?.length || 0;
  const totalUrls = staticCount + serviceCount + subServiceCount + locationCount + serviceLocationCount + subServiceLocationCount + blogCount;

  return (
    <AdminLayout title="Sitemap Manager">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Static Pages</CardDescription>
              <CardTitle className="text-2xl">{staticCount}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Service Pages</CardDescription>
              <CardTitle className="text-2xl">{serviceCount + subServiceCount}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Location Pages</CardDescription>
              <CardTitle className="text-2xl">{locationCount + serviceLocationCount + subServiceLocationCount}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Blog Posts</CardDescription>
              <CardTitle className="text-2xl">{blogCount}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Generator */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Generate Sitemap
            </CardTitle>
            <CardDescription>
              Generate a new sitemap.xml with all {totalUrls} pages including the latest blog posts.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button onClick={generateSitemap} disabled={isGenerating}>
                {isGenerating ? (
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <RefreshCw className="mr-2 h-4 w-4" />
                )}
                Generate Sitemap
              </Button>

              {generatedXml && (
                <>
                  <Button onClick={downloadSitemap} variant="secondary">
                    <Download className="mr-2 h-4 w-4" />
                    Download sitemap.xml
                  </Button>
                  <Button onClick={copyToClipboard} variant="outline">
                    Copy to Clipboard
                  </Button>
                </>
              )}
            </div>

            {generatedXml && (
              <div className="mt-4">
                <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                  <Check className="h-4 w-4" />
                  Sitemap generated successfully
                </div>
                <div className="bg-muted rounded-lg p-4 max-h-96 overflow-auto">
                  <pre className="text-xs whitespace-pre-wrap font-mono">
                    {generatedXml}
                  </pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>How to Update</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>1. Click "Generate Sitemap" to create an updated sitemap with all current pages and blog posts.</p>
            <p>2. Click "Download sitemap.xml" to save the file.</p>
            <p>3. Replace the <code className="bg-muted px-1 rounded">public/sitemap.xml</code> file in your project with the downloaded file.</p>
            <p>4. Deploy the changes to update the live sitemap.</p>
            <p className="text-primary font-medium mt-4">
              Tip: After updating, you can request re-indexing in Google Search Console.
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminSitemap;

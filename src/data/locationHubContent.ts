/**
 * Location hub page content: Drainage profiles, landmarks, FAQs, and case studies
 * Each location has unique, genuinely researched content optimized for SEO and user experience
 */

export interface LocationHubFAQ {
  question: string;
  answer: string;
}

export interface LocationHubContent {
  landmarks: string[];
  drainageProfile: string;
  localFAQs: LocationHubFAQ[];
  caseStudy: string;
}

export const LOCATION_HUB_CONTENT: Record<string, LocationHubContent> = {
  basingstoke: {
    landmarks: [
      "Festival Place Shopping Centre",
      "The Anvil Concert Hall",
      "Basing House Ruins",
      "Willis Museum",
      "War Memorial Park",
      "Eastrop Park",
      "Basingstoke Leisure Park",
      "Top of Town",
      "Basingstoke Canal",
      "Milestones Museum",
      "Basingstoke Town Centre",
      "Chineham Shopping Centre",
      "Loddon Valley Leisure Centre",
      "Lychpit",
      "South Ham",
      "Brighton Hill",
      "Popley",
      "Hatch Warren",
      "Beggarwood",
      "Black Dam",
      "Winklebury",
      "Oakridge"
    ],
    drainageProfile: `Basingstoke is a major town in Hampshire that has seen significant growth since the 1960s London overspill development programme. The town sits on chalk geology, which creates particular drainage characteristics. Chalk is porous and allows water to drain through it, but this can lead to issues with groundwater infiltration into older drainage systems, particularly during wet winters.

The town centre and older areas such as Old Basing and South Ham feature a mix of Victorian and post-war drainage infrastructure, including clay and pitch fibre pipes that are prone to deterioration over time. The extensive 1960s and 1970s housing estates in Popley, South Ham, Brighton Hill, and Winklebury have concrete and early plastic drainage systems that are now reaching the end of their expected lifespan.

Newer developments in Chineham, Hatch Warren, Beggarwood, and Kempshott have modern plastic drainage systems but can still experience blockages from tree root ingress, construction debris, and improper use. The chalk subsoil across much of Basingstoke means that ground movement during dry summers can affect pipe joints, leading to displaced connections and potential infiltration issues.

South East Water and Southern Water serve the Basingstoke area, with Southern Water responsible for the public sewer network. Properties built before the 1960s may have combined drainage systems where surface water and foul water share the same pipes, increasing the risk of overloading during heavy rainfall.`,
    localFAQs: [
      { question: "How quickly can you reach Basingstoke for a drain emergency?", answer: "We aim to arrive within 60 minutes for emergency callouts in Basingstoke town centre and surrounding areas. Our engineers are positioned locally and carry all necessary equipment on board." },
      { question: "Do you cover all areas of Basingstoke?", answer: "Yes, we cover every part of Basingstoke including the town centre, Brighton Hill, South Ham, Popley, Chineham, Hatch Warren, Beggarwood, Winklebury, Oakridge, Black Dam, Lychpit, and all surrounding areas." },
      { question: "Are there common drainage issues specific to Basingstoke?", answer: "Basingstoke sits on chalk geology, which can cause ground movement during dry summers, leading to displaced pipe joints. Older estates from the 1960s-70s often have ageing concrete or pitch fibre drainage that is prone to collapse or root ingress. We regularly deal with these issues across the town." },
      { question: "Who is responsible for drains in Basingstoke?", answer: "You are responsible for private drains within your property boundary. Southern Water maintains the public sewer network. If the blockage is in a shared or public sewer, we can diagnose the location and advise you accordingly." }
    ],
    caseStudy: "We were called to a property in Brighton Hill where the homeowner reported recurring blockages in the kitchen drain. Our CCTV survey revealed a section of collapsed pitch fibre pipe approximately four metres from the property, with tree roots from a nearby hedge penetrating the damaged section. We cleared the immediate blockage using high-pressure jetting, then carried out a trenchless pipe relining repair to restore the drainage without excavating the garden path. The repair was completed in a single day and resolved the recurring problem permanently."
  },

  tadley: {
    landmarks: [
      "Tadley Common",
      "Bishopswood Golf Course",
      "Tadley Swimming Pool",
      "Pamber Forest",
      "Aldermaston Road",
      "Mulfords Hill",
      "Tadley Town Centre",
      "Tadley Community Centre"
    ],
    drainageProfile: `Tadley is a growing residential area to the north of Basingstoke, straddling the Hampshire-Berkshire border. The area has a mix of housing from various decades, with significant development in the 1950s-80s associated with the nearby AWE site. Many properties have clay or early plastic drainage systems that require regular maintenance.

The local geology is predominantly London Clay overlying chalk, which can lead to seasonal ground movement affecting pipe joints. Properties with mature gardens often experience tree root ingress, particularly from willows and other moisture-seeking species common in the area.`,
    localFAQs: [
      { question: "Do you cover Tadley for emergency drain callouts?", answer: "Yes, we provide 24/7 emergency drainage services across Tadley and the surrounding area. Our engineers can typically reach Tadley within 60-90 minutes." },
      { question: "What are common drain problems in Tadley?", answer: "Many Tadley properties have drainage systems from the 1950s-80s that are susceptible to root ingress and joint displacement. The local clay-over-chalk geology can cause ground movement that affects pipe connections, particularly during dry summers." },
      { question: "Can you carry out CCTV drain surveys in Tadley?", answer: "Yes, we offer comprehensive CCTV drain surveys for Tadley properties, including pre-purchase surveys for home buyers. Our HD cameras can inspect the full drainage system and provide a detailed report." }
    ],
    caseStudy: "A Tadley homeowner contacted us about a persistently slow-draining toilet and bath. Our CCTV inspection revealed tree root ingress at a pipe joint approximately three metres underground. We cleared the roots using high-pressure jetting and applied a localised patch liner to seal the joint, preventing future root penetration without the need for excavation."
  },

  whitchurch: {
    landmarks: [
      "Whitchurch Silk Mill",
      "River Test",
      "Town Mill",
      "Whitchurch High Street",
      "All Hallows Church",
      "Testbourne Community School",
      "Whitchurch Sports Centre"
    ],
    drainageProfile: `Whitchurch is a historic market town on the River Test, west of Basingstoke. The town centre features many period properties with Victorian and older drainage systems, including original clay pipes and brick-built inspection chambers. The proximity to the River Test means groundwater levels can be high, particularly in winter, which increases the risk of infiltration into damaged drainage systems.

The chalk geology of the Test Valley creates unique drainage challenges. While chalk is naturally porous, the alluvial deposits near the river can impede drainage. Properties near the river or on lower ground are more susceptible to groundwater-related drainage issues.`,
    localFAQs: [
      { question: "Do you provide drainage services in Whitchurch?", answer: "Yes, we cover the whole of Whitchurch including the town centre and surrounding areas. We offer the full range of drainage services from emergency unblocking to CCTV surveys and repairs." },
      { question: "Are there specific drainage challenges in Whitchurch?", answer: "Whitchurch's proximity to the River Test means some properties experience high groundwater levels, particularly in winter. Many town centre properties also have older Victorian drainage systems that require specialist knowledge to maintain and repair." },
      { question: "Can you work on listed buildings in Whitchurch?", answer: "Yes, we have experience working on drainage systems in and around listed and period properties. We use methods that are sympathetic to the building's heritage, including trenchless repair techniques that avoid unnecessary excavation." }
    ],
    caseStudy: "We attended a period property near Whitchurch town centre where the homeowner reported sewage backing up during heavy rain. Our survey revealed that the original Victorian clay drainage was in reasonable condition but had several displaced joints allowing groundwater to infiltrate and overwhelm the system during rainfall. We sealed the joints using targeted patch repairs, resolving the infiltration issue without disturbing the property's historic garden."
  },

  overton: {
    landmarks: [
      "River Test",
      "Overton Village Centre",
      "St Mary's Church",
      "Overton Recreation Centre",
      "Court Drove",
      "Lordsfield Gardens"
    ],
    drainageProfile: `Overton is a picturesque village on the upper reaches of the River Test, known for its rural character and strong community. The village has a mix of older cottages and houses alongside more modern developments. Drainage in the area reflects this mix, with traditional clay pipe systems in the older parts of the village and modern plastic drainage in newer estates.

The chalk stream environment and the village's position in the Test Valley mean that groundwater levels can influence drainage performance, particularly for properties near the river. The rural setting also means some properties rely on septic tanks or private treatment plants rather than mains drainage.`,
    localFAQs: [
      { question: "Do you cover Overton for drain unblocking?", answer: "Yes, we cover Overton and the surrounding area for all drainage services including emergency drain unblocking, CCTV surveys, jetting, and repairs." },
      { question: "Can you service septic tanks in the Overton area?", answer: "We can inspect and maintain drainage systems connected to septic tanks and private treatment plants. If you are experiencing problems with your system, we can carry out a CCTV survey to diagnose the issue." }
    ],
    caseStudy: "A property owner in Overton called us about a blocked external drain that was causing water to pool in the garden. Our investigation found a build-up of silt and leaves in the drainage channel combined with a partial root obstruction. We cleared the blockage with high-pressure jetting and installed a root guard to prevent recurrence."
  },

  hook: {
    landmarks: [
      "Hook Village Centre",
      "Hook Common",
      "Bartley Heath",
      "Hook Infant School",
      "Hook Recreation Ground",
      "London Road",
      "Newnham Road"
    ],
    drainageProfile: `Hook is a growing village to the east of Basingstoke, well-connected by the M3 and A30. The village has expanded significantly with modern housing developments, though the older village centre retains its traditional character. The drainage infrastructure reflects this dual nature, with modern systems in new estates and older clay pipe networks in the village core.

The local geology transitions from chalk to London Clay in parts of Hook, which can affect drainage and ground conditions. Properties on clay subsoil may experience more ground movement, potentially affecting pipe joints and connections.`,
    localFAQs: [
      { question: "How quickly can you reach Hook for an emergency?", answer: "We can typically reach Hook within 60-90 minutes for emergency drainage callouts. Hook's proximity to the M3 and A30 means access is straightforward for our engineers." },
      { question: "Do you work on new-build drainage in Hook?", answer: "Yes, we service both new-build and older properties in Hook. Even modern drainage systems can experience blockages from construction debris, incorrect use, or root ingress from newly planted landscaping." }
    ],
    caseStudy: "A new-build property in Hook experienced repeated toilet blockages within six months of occupation. Our CCTV survey revealed that construction debris had been left in the drainage run, creating a restriction that caught waste material. We cleared the debris using jetting and confirmed the drainage was flowing freely throughout."
  },

  kingsclere: {
    landmarks: [
      "Kingsclere Village Centre",
      "St Mary's Church Kingsclere",
      "Watership Down",
      "Kingsclere Recreation Ground",
      "Sandford Springs Golf Club",
      "George Street"
    ],
    drainageProfile: `Kingsclere is a historic village nestled at the foot of Watership Down, in the North Hampshire Downs. The village has a charming core of period properties alongside more modern development. The drainage infrastructure in the older parts of the village dates back many decades and often consists of clay pipes with lime mortar joints.

The chalk downland setting means the area has good natural drainage in many locations, but properties in the village centre and lower-lying areas can experience issues during periods of heavy rainfall when groundwater levels rise. The rural nature of the area means some properties are served by private drainage systems.`,
    localFAQs: [
      { question: "Do you cover Kingsclere for drainage services?", answer: "Yes, we cover Kingsclere and the surrounding area including Ecchinswell, Sydmonton, and Hannington. Our full range of services is available throughout the North Hampshire Downs." },
      { question: "Are older Kingsclere properties prone to drainage problems?", answer: "Period properties in Kingsclere often have original clay drainage with lime mortar joints that can deteriorate over time. Tree root ingress is also common in established gardens. Regular CCTV inspections can identify developing problems before they become emergencies." }
    ],
    caseStudy: "We were called to a cottage in Kingsclere where the homeowner reported a foul smell from the garden. Our CCTV survey found a collapsed section of clay pipe beneath the lawn where tree roots had penetrated the joint and caused a complete failure. We excavated the damaged section, replaced it with modern plastic pipe, and reinstated the garden surface."
  },

  bramley: {
    landmarks: [
      "Bramley Village Centre",
      "St James's Church Bramley",
      "Bramley Green",
      "Clift Meadow",
      "Sherfield Road",
      "The Street"
    ],
    drainageProfile: `Bramley is a village to the north of Basingstoke that has experienced steady growth with new housing developments expanding the settlement. The village has a traditional centre with older properties connected to original drainage infrastructure, while the newer estates have modern plastic drainage systems.

The local geology is predominantly chalk with clay-with-flints in some areas. Ground conditions can vary across the village, with some areas more prone to seasonal ground movement that affects drainage connections. The Loddon River runs near Bramley, and properties in lower-lying areas may be affected by elevated groundwater during wet periods.`,
    localFAQs: [
      { question: "Do you provide emergency drainage services in Bramley?", answer: "Yes, we offer 24/7 emergency drainage services in Bramley. Our engineers can typically reach Bramley within 60 minutes, carrying all the equipment needed to diagnose and resolve drainage emergencies." },
      { question: "What drainage problems are common in Bramley?", answer: "We commonly see root ingress in the older parts of Bramley, blockages from grease and wet wipes across all property types, and joint displacement in areas where seasonal ground movement affects clay drainage systems." }
    ],
    caseStudy: "A homeowner on the edge of Bramley village experienced flooding in their downstairs bathroom during heavy rain. Our investigation revealed that the combined drainage system was being overwhelmed by surface water ingress through multiple cracked pipe joints. We repaired the damaged sections using patch lining and separated the surface water drainage to prevent future flooding."
  },

  "sherborne-st-john": {
    landmarks: [
      "The Vyne (National Trust)",
      "Sherborne St John Village Centre",
      "St Andrew's Church",
      "Chute House",
      "Kiln Road",
      "Elm Road"
    ],
    drainageProfile: `Sherborne St John is a quiet village just north of Basingstoke, known for being home to The Vyne, a National Trust property. The village has a small number of period properties alongside more modern housing. Drainage systems in the area range from traditional clay pipes in older properties to modern plastic installations in newer builds.

The village sits on chalk and clay-with-flints geology, which can cause localised ground movement affecting older drainage connections. The rural character of the village means some properties have longer drainage runs to reach the public sewer network, which can be more susceptible to blockages and root ingress.`,
    localFAQs: [
      { question: "Can you service drainage in Sherborne St John?", answer: "Yes, we cover Sherborne St John and provide the full range of drainage services including emergency unblocking, CCTV surveys, jetting, and repairs." },
      { question: "Do properties in Sherborne St John have specific drainage issues?", answer: "Some properties in the village have longer drainage runs to reach the public sewer, which can be more prone to blockages. The local geology can also cause ground movement affecting older clay pipe joints. Regular maintenance helps prevent problems." }
    ],
    caseStudy: "We attended a property in Sherborne St John where the homeowner reported that their outside drain was overflowing every few weeks. Our CCTV survey revealed a significant build-up of fat and grease in the drainage run, combined with a partial collapse where the pipe passed beneath a garden path. We cleared the blockage with jetting and replaced the collapsed section, resolving the recurring problem."
  },

  "old-basing": {
    landmarks: [
      "Basing House Ruins",
      "St Mary's Church Old Basing",
      "Old Basing Village Centre",
      "Bartons Mill",
      "River Loddon",
      "The Street",
      "Milkingpen Lane",
      "Linden Avenue"
    ],
    drainageProfile: `Old Basing is a historic village just east of Basingstoke town centre, known for the ruins of Basing House, once the largest private house in England. The village has a wealth of period properties, many dating back several centuries, alongside modern housing developments.

The older properties in Old Basing typically have traditional clay drainage systems that require specialist knowledge to maintain. The proximity to the River Loddon means groundwater levels can be elevated, particularly during winter months, which increases the risk of infiltration into damaged drainage systems. The area's history means that some properties have complex drainage layouts that have been modified and extended over many decades.`,
    localFAQs: [
      { question: "Do you cover Old Basing for drainage services?", answer: "Yes, we cover Old Basing and provide the full range of drainage services. Our engineers are familiar with the older drainage systems commonly found in the village's period properties." },
      { question: "Can you work on drainage for period properties in Old Basing?", answer: "Yes, we have experience working on drainage systems in historic and period properties. We use minimally invasive techniques such as CCTV surveys and trenchless repairs to avoid unnecessary disruption to your property and garden." },
      { question: "Is groundwater a problem for drainage in Old Basing?", answer: "The proximity to the River Loddon means some Old Basing properties experience elevated groundwater, particularly in winter. This can infiltrate damaged drainage systems and cause capacity issues. A CCTV survey can identify whether groundwater infiltration is affecting your drainage." }
    ],
    caseStudy: "We were called to a period property in Old Basing where the homeowner reported slow drainage throughout the house. Our CCTV survey revealed that the original clay drainage system had multiple displaced joints allowing groundwater from the nearby River Loddon to infiltrate the system. We carried out targeted patch repairs at each affected joint, sealing out the groundwater without the need for full excavation, and restoring normal drainage flow throughout the property."
  }
};

export function getLocationHubContent(locationSlug: string): LocationHubContent | undefined {
  return LOCATION_HUB_CONTENT[locationSlug];
}

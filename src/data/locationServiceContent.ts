/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  basingstoke: {
    neighborhoods: ["Town Centre", "Brighton Hill", "South Ham", "Popley", "Chineham", "Hatch Warren", "Beggarwood", "Kempshott", "Winklebury", "Oakridge", "Black Dam", "Lychpit"],
    landmarks: ["Festival Place Shopping Centre", "The Anvil Concert Hall", "Basing House Ruins", "War Memorial Park", "Basingstoke Canal"],
    drainageInfo: "Basingstoke's drainage infrastructure reflects its rapid expansion during the 1960s London overspill programme. The town centre and older areas like Old Basing feature Victorian and post-war clay pipe systems, while the large 1960s-70s estates in Popley, South Ham, Brighton Hill, and Winklebury have concrete and early plastic drainage now reaching the end of their design life. Newer developments in Chineham, Hatch Warren, and Beggarwood have modern plastic systems but still experience blockages from root ingress and construction debris. The chalk geology across much of Basingstoke causes seasonal ground movement affecting pipe joints.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "1960s-70s housing estates, modern family homes, Victorian terraces, and commercial premises"
  },
  tadley: {
    neighborhoods: ["Tadley Common", "Pamber Heath", "Pamber End", "Baughurst", "Aldermaston"],
    landmarks: ["Tadley Common", "Bishopswood Golf Course", "Pamber Forest", "Tadley Swimming Pool", "Aldermaston Road"],
    drainageInfo: "Tadley is a growing residential area north of Basingstoke, straddling the Hampshire-Berkshire border. Significant development in the 1950s-80s associated with the nearby AWE site means many properties have clay or early plastic drainage systems requiring regular maintenance. The local geology of London Clay overlying chalk leads to seasonal ground movement affecting pipe joints. Properties with mature gardens often experience tree root ingress, particularly from willows and other moisture-seeking species common in the area.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "1950s-80s family homes, modern detached houses, rural cottages, and village properties"
  },
  whitchurch: {
    neighborhoods: ["Town Centre", "Whitchurch Hill", "Laverstoke", "Freefolk", "Tufton"],
    landmarks: ["Whitchurch Silk Mill", "River Test", "Town Mill", "All Hallows Church", "Whitchurch High Street"],
    drainageInfo: "Whitchurch is a historic market town on the River Test, west of Basingstoke. The town centre features many period properties with Victorian and older drainage systems, including original clay pipes and brick-built inspection chambers. Proximity to the River Test means groundwater levels can be high, particularly in winter, increasing the risk of infiltration into damaged drainage systems. The chalk geology of the Test Valley creates unique drainage challenges, with alluvial deposits near the river impeding natural drainage.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "period cottages, Victorian terraces, riverside properties, and modern family homes"
  },
  overton: {
    neighborhoods: ["Village Centre", "Court Drove", "Lordsfield", "Quidhampton", "Polhampton"],
    landmarks: ["River Test", "Overton Village Centre", "St Mary's Church", "Overton Recreation Centre", "Court Drove"],
    drainageInfo: "Overton is a picturesque village on the upper reaches of the River Test, known for its rural character. The village has a mix of older cottages alongside more modern developments, with traditional clay pipe systems in the older parts and modern plastic drainage in newer estates. The chalk stream environment and position in the Test Valley mean groundwater levels can influence drainage performance. Some properties rely on septic tanks or private treatment plants rather than mains drainage.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "traditional village cottages, modern family homes, rural properties, and converted agricultural buildings"
  },
  hook: {
    neighborhoods: ["Village Centre", "Hook Common", "Bartley Heath", "Newnham", "Rotherwick"],
    landmarks: ["Hook Village Centre", "Hook Common", "Bartley Heath", "Hook Recreation Ground", "London Road"],
    drainageInfo: "Hook is a growing village east of Basingstoke, well-connected by the M3 and A30. The village has expanded significantly with modern housing developments, though the older village centre retains its traditional character. Modern drainage systems serve the newer estates while older clay pipe networks remain in the village core. The local geology transitions from chalk to London Clay in parts of Hook, affecting drainage and ground conditions, with properties on clay subsoil experiencing more ground movement that can affect pipe joints.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "modern new-build estates, traditional village houses, period cottages, and semi-detached family homes"
  },
  kingsclere: {
    neighborhoods: ["Village Centre", "Ecchinswell", "Sydmonton", "Hannington", "North End"],
    landmarks: ["Watership Down", "St Mary's Church Kingsclere", "Kingsclere Recreation Ground", "Sandford Springs Golf Club", "George Street"],
    drainageInfo: "Kingsclere is a historic village nestled at the foot of Watership Down in the North Hampshire Downs. The village core has period properties with drainage dating back many decades, often consisting of clay pipes with lime mortar joints. The chalk downland setting means the area generally has good natural drainage, but properties in the village centre and lower-lying areas can experience issues during heavy rainfall when groundwater levels rise. The rural nature of the area means some properties are served by private drainage systems.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "period village cottages, thatched properties, modern detached houses, and rural farmsteads"
  },
  bramley: {
    neighborhoods: ["Village Centre", "Bramley Green", "Clift Meadow", "Sherfield Road", "The Street"],
    landmarks: ["St James's Church Bramley", "Bramley Green", "Clift Meadow", "Sherfield Road", "The Street"],
    drainageInfo: "Bramley is a village north of Basingstoke that has experienced steady growth with new housing developments expanding the settlement. The traditional centre has older properties connected to original drainage infrastructure, while newer estates have modern plastic systems. The local geology is predominantly chalk with clay-with-flints in some areas, causing seasonal ground movement that affects drainage connections. The River Loddon runs near Bramley, and properties in lower-lying areas may be affected by elevated groundwater during wet periods.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "traditional village houses, modern family estates, period cottages, and rural properties"
  },
  "sherborne-st-john": {
    neighborhoods: ["Village Centre", "Kiln Road", "Elm Road", "Monk Sherborne", "Charter Alley"],
    landmarks: ["The Vyne (National Trust)", "St Andrew's Church", "Chute House", "Kiln Road", "Elm Road"],
    drainageInfo: "Sherborne St John is a quiet village just north of Basingstoke, known for being home to The Vyne, a National Trust property. The village has a small number of period properties alongside more modern housing, with drainage systems ranging from traditional clay pipes in older properties to modern plastic installations in newer builds. The village sits on chalk and clay-with-flints geology, which can cause localised ground movement affecting older drainage connections. The rural character means some properties have longer drainage runs to reach the public sewer network.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "period village properties, modern detached houses, rural cottages, and converted buildings"
  },
  "old-basing": {
    neighborhoods: ["Village Centre", "Bartons Mill", "Milkingpen Lane", "Linden Avenue", "The Street"],
    landmarks: ["Basing House Ruins", "St Mary's Church Old Basing", "Bartons Mill", "River Loddon", "The Street"],
    drainageInfo: "Old Basing is a historic village just east of Basingstoke town centre, known for the ruins of Basing House, once the largest private house in England. The village has a wealth of period properties, many dating back several centuries, alongside modern housing developments. Older properties typically have traditional clay drainage systems requiring specialist knowledge to maintain. Proximity to the River Loddon means groundwater levels can be elevated, particularly during winter months, increasing the risk of infiltration into damaged drainage systems.",
    responseTime: "typically within 30-45 minutes",
    propertyTypes: "period village houses, historic cottages, modern family homes, and riverside properties"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  basingstoke: {
    "blocked-drains": {
      intro: "Basingstoke's rapid post-war expansion means blocked drains can affect anything from a 1960s housing estate in Popley to a modern family home in Chineham. Our experienced engineers understand the unique drainage challenges facing properties across the town and respond quickly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup in domestic kitchens across Basingstoke estates", "Tree root intrusion from mature street trees in established areas", "Debris accumulation in ageing concrete and clay pipes from the 1960s-70s", "Wet wipe blockages causing drain backups", "Foreign object obstructions in commercial premises around Festival Place"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties in Basingstoke's older estates like South Ham and Brighton Hill should consider annual drain inspections, as the 1960s-70s concrete pipes are now past their typical design life."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Basingstoke, you need a fast response from engineers who know the local area. Whether you're in the town centre, Chineham, or Hatch Warren, our drain unblocking teams are strategically positioned across the area to reach you quickly and resolve the problem efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap scum", "External drain blockages from leaves and debris", "Shared drainage issues in terraced housing", "Commercial kitchen drain problems"],
      process: "Our engineers arrive equipped with manual rods, electric eels, and high-pressure jetting equipment to handle any unblocking situation. We identify the blockage type, select the appropriate method, and clear your drains while minimising disruption to your property.",
      localTip: "Basingstoke's busy restaurants and takeaways around Festival Place and the Top of Town benefit from regular grease trap maintenance to prevent drain blockages."
    },
    "cctv-drain-surveys": {
      intro: "Understanding what's happening inside your Basingstoke property's drainage system has never been easier. Our advanced CCTV drain surveys provide crystal-clear footage of pipe conditions, helping identify issues before they become emergencies. This is particularly valuable for Basingstoke's older 1960s-70s housing stock where ageing pipes are increasingly prone to failure.",
      commonProblems: ["Hidden cracks in ageing concrete and clay pipes", "Displaced joints causing leaks", "Root ingress at pipe connections", "Scale and deposit buildup", "Structural damage from ground movement on chalk subsoil"],
      process: "We insert a high-definition camera into your drainage system, recording footage that clearly shows the condition of your pipes. You receive a detailed report with findings, recommendations, and annotated images showing any areas of concern.",
      localTip: "Buying a property in Basingstoke's older estates like Popley, Winklebury, or South Ham? A pre-purchase CCTV survey can reveal hidden drainage issues that could cost thousands to repair."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Basingstoke's often ageing pipe systems. Our specialist equipment delivers water at pressures up to 4,000 PSI, cutting through grease, scale, and debris while being gentle on pipe walls.",
      commonProblems: ["Heavy grease accumulation", "Scale buildup in old pipes", "Compacted debris and sediment", "Root masses blocking flow", "General pipe cleaning needs"],
      process: "Our jetting equipment is carefully inserted into your drainage system, with the water pressure adjusted to suit your pipe type and condition. The rotating nozzle scours the pipe walls clean while flushing debris towards the sewer connection.",
      localTip: "Basingstoke's chalk geology contributes to hard water and scale buildup in pipes. Regular jetting every 12-18 months keeps systems flowing freely."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies don't wait for convenient times, and neither do we. Our Basingstoke emergency response teams operate around the clock, ready to tackle overflowing drains, flooding, and sewage backups anywhere in the town. From Popley family homes to town centre businesses, we're there when you need us most.",
      commonProblems: ["Overflowing manholes and drains", "Sewage backing up into properties", "Flooding from blocked surface drains", "Collapsed drains causing sinkholes", "Foul odours indicating serious problems"],
      process: "Call our emergency line and we'll dispatch the nearest available engineer to your Basingstoke location. They'll assess the situation, implement immediate containment if needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know where your external manhole covers are located. In a drainage emergency, this information helps our engineers begin work immediately upon arrival."
    },
    "drain-repairs": {
      intro: "Basingstoke's mix of post-war estates and modern developments means drain repairs require both experience with ageing systems and knowledge of contemporary techniques. Our repair specialists handle everything from patching minor cracks to complete pipe replacement, always selecting the most cost-effective approach for your specific situation.",
      commonProblems: ["Cracked and fractured pipes", "Displaced or misaligned joints", "Tree root damage", "Deterioration of 1960s-70s concrete drainage", "Ground movement damage on chalk subsoil"],
      process: "We assess the damage using CCTV inspection, then recommend the most appropriate repair method. Options range from no-dig pipe relining for accessible damage to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Basingstoke's chalk subsoil can cause pipe movement during wet and dry cycles. Watch for slow drainage or damp patches as early warning signs."
    }
  },
  tadley: {
    "blocked-drains": {
      intro: "Tadley's mix of 1950s-80s housing and modern developments creates varied drainage challenges. Our Tadley blocked drain specialists understand the differences between older properties near the town centre and newer builds on the outskirts, bringing the right expertise to every callout across the area.",
      commonProblems: ["Root intrusion from mature garden trees and hedgerows", "Fat and grease buildup from household kitchens", "Debris accumulation in ageing clay pipes", "Surface water blockages from leaf litter", "Shared drainage issues in semi-detached housing"],
      process: "We assess each Tadley blockage considering the property type, pipe age, and drainage layout. Older 1950s properties need different handling than modern builds, and our engineers adapt their approach accordingly.",
      localTip: "Tadley's mature gardens and established trees along residential streets are beautiful but pose significant root intrusion risks — schedule annual CCTV inspections if you have large trees within 5 metres of drainage runs."
    },
    "drain-unblocking": {
      intro: "When drains block in Tadley, our local teams respond promptly with the right equipment for every property type. From established homes near Tadley Common to newer developments, we clear blockages efficiently while respecting your property.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs in family homes", "External gulley obstructions from garden debris", "Utility room and laundry drain blockages", "Interceptor trap blockages in older properties"],
      process: "Our Tadley engineers arrive equipped for the area's varied property types. We locate the blockage precisely, select the least disruptive clearing method, and restore full drainage flow.",
      localTip: "Tadley properties with gravel driveways should fit gulley guards to prevent stones entering surface water drains."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're buying a 1960s family home or investigating drainage issues at a Tadley property, our CCTV drain surveys provide the detailed assessment you need. High-definition cameras reveal the true condition of underground pipes, helping you make informed decisions about your property.",
      commonProblems: ["Pre-purchase surveys for older properties", "Root ingress investigation in mature gardens", "Condition assessment of mid-century pipe systems", "Joint and connection problems from ground settling", "Insurance and renovation planning requirements"],
      process: "We survey Tadley properties thoroughly, documenting all drainage routes including connections to outbuildings and extensions. Reports are detailed and professional, suitable for property transactions and insurance purposes.",
      localTip: "Planning an extension on your Tadley home? A pre-build CCTV drain survey identifies any pipes that need protecting or redirecting before construction begins."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Tadley's period and modern drainage at peak performance. Our careful approach removes accumulated deposits from older clay pipes and clears root masses from garden-heavy properties, restoring optimal flow throughout your system.",
      commonProblems: ["Root mass accumulation from garden trees", "Scale deposits from water supply", "Grease and fat buildup over time", "Silt and garden debris in surface water drains", "General maintenance for residential drainage networks"],
      process: "We adjust jetting pressure and nozzle selection to suit each pipe's material and age. Tadley's older properties receive gentler treatment that effectively clears deposits without risking damage to original drainage.",
      localTip: "Tadley properties with large gardens should combine annual jetting with root inhibitor treatment to keep drainage clear year-round."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Tadley demand swift, professional response. Whether you're facing sewage backup in an established home or flooding at a newer property, our emergency teams are available around the clock to protect your property from damage.",
      commonProblems: ["Sewage backing up into ground floors", "Garden flooding from overwhelmed drainage", "Overflowing inspection chambers", "Drain collapse beneath driveways and patios", "Storm water overwhelming older drainage systems"],
      process: "Emergency calls from Tadley are prioritised and dispatched immediately. Our engineers understand the area's property types and act quickly to contain damage while implementing effective, lasting solutions.",
      localTip: "Tadley properties in lower-lying areas may experience increased surface water runoff during heavy rain — ensure gullies and downpipe connections are clear."
    },
    "drain-repairs": {
      intro: "Repairing drainage beneath Tadley's varied properties requires specialist care. Our repair teams work with all property ages across the area, from restoring older clay pipes in established homes to fixing modern systems in newer developments.",
      commonProblems: ["Root damage to clay pipe joints", "Cracked pipes beneath driveways and patios", "Displaced joints from ground movement", "Age-related deterioration of older drainage", "Damage from extension and renovation projects"],
      process: "We investigate thoroughly and recommend repairs suited to your property's character. No-dig relining preserves mature gardens and landscaping, while excavation is reserved for severe damage requiring full replacement.",
      localTip: "Tadley's clay-over-chalk geology and mature tree cover cause seasonal ground movement — flexible repair solutions like pipe relining accommodate this better than rigid replacements."
    }
  },
  whitchurch: {
    "blocked-drains": {
      intro: "Whitchurch's historic market town heritage and riverside location create distinctive drainage challenges. From traditional period properties along the High Street to more modern homes on the outskirts, our Whitchurch blocked drain specialists bring local knowledge and specialist equipment to clear any obstruction.",
      commonProblems: ["Debris accumulation in ageing Victorian drainage", "Root intrusion from established trees in mature gardens", "Fat and grease buildup in domestic kitchens", "Groundwater infiltration near the River Test", "Surface water issues during periods of high rainfall"],
      process: "We assess each Whitchurch blockage considering the property type, drainage age, and the town's proximity to the River Test before selecting our clearing method.",
      localTip: "Whitchurch properties near the River Test should have drainage inspected regularly, as riverside groundwater levels and tree roots affect pipe integrity."
    },
    "drain-unblocking": {
      intro: "When Whitchurch drains need unblocking, our local teams cover the entire area from the town centre to surrounding villages. We handle everything from simple kitchen sink blockages to complex drainage issues in the town's many period properties.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages from hair and soap", "External gulley obstructions from fallen leaves", "Interceptor trap blockages in older properties", "Washing machine and utility drain problems"],
      process: "Our Whitchurch engineers arrive with comprehensive unblocking tools suited to the area's property mix. We identify the obstruction quickly and clear it completely, testing flow restoration before finishing the job.",
      localTip: "Whitchurch's period properties along the High Street often have deep, original inspection chambers — if neighbours are experiencing slow drains too, the blockage is likely in the shared section."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Whitchurch property's drainage is essential for effective maintenance. Our CCTV surveys provide detailed pipe condition assessments, particularly valuable for the town's period properties where drainage history may span several centuries.",
      commonProblems: ["Mapping drainage in older period buildings", "Assessing drainage condition near the River Test", "Pre-purchase surveys for period properties", "Root ingress from mature vegetation", "Investigating causes of recurring blockages"],
      process: "We survey Whitchurch drainage methodically, recording condition and mapping routes. This is especially important for properties near the river where groundwater can affect pipe stability.",
      localTip: "Buying a property in Whitchurch town centre? Always commission a full CCTV drain survey — period properties may have complex drainage layouts modified over many decades."
    },
    "drain-jetting": {
      intro: "High-pressure jetting effectively maintains Whitchurch's varied drainage systems, from traditional clay channels in period properties to modern plastic pipes in newer estates. Our specialist equipment clears the silt, scale, and debris that accumulate in local drainage.",
      commonProblems: ["Silt and sediment deposits from nearby river", "Scale accumulation from water supply", "Grease buildup in residential drains", "Root fragments requiring clearance", "Pre-survey cleaning for accurate assessment"],
      process: "We match jetting equipment to Whitchurch's pipe types and conditions. Period drainage receives careful, lower-pressure treatment, while modern systems can handle more thorough cleaning for optimal results.",
      localTip: "Whitchurch's riverside properties experience higher groundwater levels that can carry silt into drainage — regular jetting prevents gradual flow reduction."
    },
    "emergency-drain-services": {
      intro: "Whitchurch drainage emergencies receive rapid response from our local teams, whether you're dealing with flooding near the River Test or sewage backup in the town centre. Our engineers are available around the clock, equipped to handle emergencies across the area.",
      commonProblems: ["Surface water flooding during heavy rainfall", "Sewage backing up into ground-floor rooms", "Manhole overflows in the town centre", "Drain collapses after ground saturation", "River-related drainage emergencies"],
      process: "Emergency calls from Whitchurch receive immediate dispatch. We provide realistic arrival times and come prepared with pumping equipment and emergency repair materials to contain damage and resolve the situation.",
      localTip: "Whitchurch properties near the River Test should maintain clear surface water drains year-round, as river levels can rise after sustained rainfall."
    },
    "drain-repairs": {
      intro: "Whitchurch's drainage spans from original Victorian systems to modern plastic pipes, and our repair teams work confidently with all types. Whether it's relining period pipes in the town centre or replacing collapsed sections on the outskirts, we select repair methods suited to each property's age and construction.",
      commonProblems: ["Cracked clay drainage in period properties", "Joint displacement from ground movement", "Root damage requiring pipe replacement", "Groundwater infiltration through damaged joints", "Deterioration of older pipe materials"],
      process: "We investigate thoroughly before recommending Whitchurch drainage repairs. Our approach accounts for the area's chalk geology and riverside conditions, using durable materials that provide long-lasting results.",
      localTip: "Whitchurch's proximity to the River Test means some properties experience seasonal groundwater changes — ensure your repair contractor assesses ground conditions before undertaking drainage work."
    }
  },
  overton: {
    "blocked-drains": {
      intro: "Overton's rural village setting on the River Test, combined with its mix of traditional cottages and modern housing, creates diverse drainage challenges. Our Overton blocked drain specialists understand how the chalk stream environment affects drainage systems, from older village properties to newer developments.",
      commonProblems: ["Silt and sediment accumulation from rural environment", "Root intrusion from mature garden trees", "Fat and grease from domestic kitchens", "Debris buildup in surface water drains", "Blockages in older clay pipe drainage"],
      process: "We assess your Overton property's position relative to the River Test before selecting clearing methods. Properties near the river may require different approaches than those on higher ground. Our engineers are experienced with all Overton property types and drainage configurations.",
      localTip: "Overton properties near the River Test should ensure external drains have adequate gully pots to catch debris before it enters the pipe system, particularly after heavy rain."
    },
    "drain-unblocking": {
      intro: "When drains block in Overton, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in the village centre or an overflowing external drain on the outskirts, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Washing machine drain problems"],
      process: "Our Overton engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Overton's village properties often have rear drainage running through neighbouring land. Know your drainage easements to avoid disputes."
    },
    "cctv-drain-surveys": {
      intro: "Overton's architectural variety, from traditional village cottages to modern family homes, means drainage systems vary significantly. Our CCTV surveys reveal exactly what's inside your pipes, providing invaluable information for property purchasers, sellers, and homeowners investigating persistent problems.",
      commonProblems: ["Age-related pipe deterioration", "Root ingress from garden vegetation", "Ground movement affecting joints", "Historical modifications and connections", "Condition assessment for transactions"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any areas requiring attention. The final report includes annotated footage, a condition summary, and maintenance recommendations specific to your property.",
      localTip: "Purchasing a period cottage in Overton? CCTV surveys can identify older drainage features that may need specialist attention."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Overton's varied drainage systems often need. From clearing scale deposits in older village pipes to routine maintenance for newer systems, our jetting service restores optimal drainage performance across the area.",
      commonProblems: ["Scale accumulation from hard water supply", "Grease buildup in residential drains", "Silt deposits from surface water drainage", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. The process is controlled and methodical, ensuring thorough cleaning without risk of damage to your drainage system.",
      localTip: "Overton properties near the River Test benefit from periodic jetting to remove silt and mineral deposits before they restrict flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Overton receive rapid response from our local teams, day or night. From flooded gardens to sewage issues in the village, our engineers are ready to tackle any emergency situation and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Garden flooding from blocked drains", "Overflowing inspection chambers", "Collapsed drains causing subsidence", "Storm damage to drainage systems"],
      process: "Emergency calls to our Overton service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Overton's riverside and low-lying properties are prone to surface water issues during heavy rain. Keeping gullies clear helps prevent property flooding."
    },
    "drain-repairs": {
      intro: "Overton's diverse property ages mean drain repairs must be tailored to specific situations. Whether you need no-dig relining for an older clay pipe or excavation repairs for a newer property, our repair specialists have the skills and equipment for the job.",
      commonProblems: ["Cracked and fractured pipes", "Displaced joints from ground movement", "Root damage requiring intervention", "Age-related deterioration", "Damage from external factors"],
      process: "Following thorough investigation, we recommend the most cost-effective repair approach. We explain all options clearly, including likely outcomes and any ongoing maintenance requirements. All repairs are guaranteed for your peace of mind.",
      localTip: "Overton's chalk geology can cause seasonal pipe movement. Consider flexible repair solutions that accommodate ground conditions."
    }
  },
  hook: {
    "blocked-drains": {
      intro: "Hook's blend of established village properties and modern housing developments creates varied drainage challenges. Our Hook blocked drain specialists understand the differences between traditional cottages in the village centre and newer estates on the outskirts, bringing the right expertise to every callout.",
      commonProblems: ["Root intrusion from mature garden trees and hedgerows", "Fat and grease buildup from busy household kitchens", "Debris accumulation in older clay pipes", "Surface water blockages in newer developments", "Construction debris in recently built properties"],
      process: "We assess each Hook blockage considering the property type, pipe age, and drainage layout. Village centre properties need different handling than modern new-build estates, and our engineers adapt their approach accordingly.",
      localTip: "Hook's expanding new-build developments can experience drainage issues from construction debris left in pipes — if you have a recently completed property and experience blockages, this is a common cause."
    },
    "drain-unblocking": {
      intro: "When drains block in Hook, our local teams respond promptly with the right equipment for every property type. From period homes in the village centre to modern family estates, we clear blockages efficiently while respecting your property.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs in family homes", "External gulley obstructions from garden debris", "Utility room and laundry drain blockages", "New-build drainage issues from construction debris"],
      process: "Our Hook engineers arrive equipped for the area's varied property types. We locate the blockage precisely, select the least disruptive clearing method, and restore full drainage flow.",
      localTip: "Hook properties with gravel driveways should fit gulley guards to prevent stones entering surface water drains."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're buying a village cottage or investigating drainage at a modern Hook property, our CCTV surveys provide the detailed assessment you need. We reveal the true condition of pipes beneath Hook's diverse range of properties.",
      commonProblems: ["Pre-purchase surveys for period cottages", "Root ingress investigation in mature gardens", "New-build snagging inspections", "Condition assessment of mixed-age pipe systems", "Insurance and renovation planning requirements"],
      process: "We survey Hook properties thoroughly, documenting all drainage routes including connections to outbuildings and extensions. Reports are detailed and professional, suitable for property transactions and insurance purposes.",
      localTip: "Planning an extension on your Hook home? A pre-build CCTV drain survey identifies any pipes that need protecting or redirecting before construction begins."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Hook's period and modern drainage at peak performance. Our careful approach removes accumulated deposits from older clay pipes and clears debris from newer systems, restoring optimal flow throughout your property.",
      commonProblems: ["Root mass accumulation from garden trees", "Scale deposits from water supply", "Grease and fat buildup over time", "Silt and garden debris in surface water drains", "General maintenance for residential drainage networks"],
      process: "We adjust jetting pressure and nozzle selection to suit each pipe's material and age. Hook's older properties receive gentler treatment that effectively clears deposits without risking damage to original drainage.",
      localTip: "Hook properties with large gardens should combine annual jetting with root inhibitor treatment to keep drainage clear year-round."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Hook demand swift, professional response. Whether you're facing sewage backup in a village cottage or flooding at a modern family home, our emergency teams are available around the clock to protect your property from damage.",
      commonProblems: ["Sewage backing up into ground floors", "Garden flooding from overwhelmed drainage", "Overflowing inspection chambers", "Drain collapse beneath driveways and patios", "Storm water overwhelming drainage systems"],
      process: "Emergency calls from Hook are prioritised and dispatched immediately. Our engineers understand the area's property types and act quickly to contain damage while implementing effective, lasting solutions.",
      localTip: "Hook properties in lower-lying areas near Hook Common may experience increased surface water runoff during heavy rain — ensure gullies and downpipe connections are clear."
    },
    "drain-repairs": {
      intro: "Repairing drainage beneath Hook's varied properties requires specialist care. Our repair teams work with all property ages across the area, from restoring older clay pipes in village cottages to fixing modern systems in new-build estates.",
      commonProblems: ["Root damage to clay pipe joints", "Cracked pipes beneath driveways and patios", "Displaced joints from ground movement", "Age-related deterioration of period drainage", "Settling damage in new-build properties"],
      process: "We investigate thoroughly and recommend repairs suited to your property's character. No-dig relining preserves mature gardens and landscaping, while excavation is reserved for severe damage requiring full replacement.",
      localTip: "Hook's transition from chalk to London Clay geology means ground conditions can vary across the village — always commission a proper survey before planning drainage repair work."
    }
  },
  kingsclere: {
    "blocked-drains": {
      intro: "Kingsclere's position at the foot of Watership Down gives this historic village its distinctive character, but also brings unique drainage challenges. The area's period cottages feature original clay drainage systems, while the chalk downland geology influences groundwater behaviour. Our Kingsclere specialists understand these local factors and deliver effective blocked drain solutions.",
      commonProblems: ["Tree root intrusion from mature gardens", "Aged clay pipe deterioration", "Fat buildup from household kitchens", "Leaf debris in autumn months", "Private drainage system issues in rural properties"],
      process: "We approach Kingsclere blocked drains with appreciation for the area's period properties. Our clearing methods are effective yet gentle on original drainage features, preserving the integrity of your home's infrastructure.",
      localTip: "Kingsclere's established gardens and mature trees along village streets are a root intrusion risk. Consider annual CCTV checks if you have large trees near your drainage runs."
    },
    "drain-unblocking": {
      intro: "Kingsclere residents deserve drain unblocking services that match the quality of their village properties. Our local teams respond promptly to calls from the village centre to surrounding hamlets, bringing the expertise needed to clear blockages in period properties without causing unnecessary disruption.",
      commonProblems: ["Bathroom drain clogs", "Kitchen sink blockages", "External gulley obstructions", "Downpipe connections", "Septic tank and private drainage issues"],
      process: "Our Kingsclere engineers understand period property drainage. We use appropriate techniques for each situation, whether that's careful rodding of delicate clay pipes or jetting for more robust modern sections.",
      localTip: "Kingsclere's period properties often have drainage running beneath conservatories and extensions. Know your drainage routes before planning building work."
    },
    "cctv-drain-surveys": {
      intro: "Kingsclere's desirable village setting makes thorough drainage assessment essential for buyers and sellers alike. Our CCTV surveys provide detailed condition reports that protect your investment, revealing the true state of underground drainage in the area's sought-after period properties.",
      commonProblems: ["Pre-purchase condition assessment", "Root ingress investigation", "Drainage route mapping", "Period feature documentation", "Private drainage system assessment"],
      process: "We survey Kingsclere properties with appreciation for their character and value. Our reports are comprehensive and professional, suitable for property transactions and insurance purposes.",
      localTip: "Kingsclere home sellers can benefit from proactive drainage surveys, addressing any issues before they become negotiating points in this competitive Hampshire village property market."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Kingsclere's period drainage at peak performance. Our careful approach removes accumulated deposits from older clay pipes, restoring flow capacity while preserving the integrity of original drainage features.",
      commonProblems: ["Scale from hard water supply", "Grease accumulation over time", "Root mass removal", "Silt and debris clearing", "Pre-survey preparation"],
      process: "Kingsclere's period drainage requires measured jetting approaches. We adjust pressure and nozzle selection to suit pipe age and condition, achieving thorough cleaning without risk of damage.",
      localTip: "Kingsclere's chalk downland setting means good natural drainage gradients, but pipe scale buildup can still restrict flow. Periodic jetting maintains optimal performance and extends drainage lifespan."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Kingsclere receive our immediate attention, with local engineers ready to protect your home from damage. Whether you're facing sewage backup in a period cottage or flooding in a village property, we respond with the urgency your situation demands.",
      commonProblems: ["Sewage backing up into ground floors", "Garden flooding from blocked drains", "Manhole overflows", "Drain collapse affecting foundations", "Persistent foul odours"],
      process: "Emergency response to Kingsclere properties is swift and professional. We understand the area's property values and act to minimise damage and disruption while resolving the underlying problem.",
      localTip: "Kingsclere properties with cellars or lower ground floors should ensure drainage connections and non-return valves are regularly serviced to prevent backup during storms."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Kingsclere's character properties requires specialist knowledge and sympathetic approaches. Our repair team works with all property ages, from original clay installations to modern connections, always selecting methods that preserve your home's integrity while delivering lasting results.",
      commonProblems: ["Aged clay pipe cracking", "Root damage to joints", "Ground movement effects on chalk subsoil", "Historical modification issues", "Private drainage system repairs"],
      process: "We investigate Kingsclere drainage issues thoroughly, recommending repairs that suit your property's age and construction. No-dig techniques are often ideal for period properties, avoiding disruption to mature gardens and original features.",
      localTip: "Kingsclere's older drainage often includes original clay pipes with lime mortar joints. These can be repaired and relined rather than replaced, preserving the character of your property."
    }
  },
  bramley: {
    "blocked-drains": {
      intro: "Bramley's growing village, with its traditional centre and expanding modern estates, presents a varied set of drainage challenges. Our Bramley blocked drain specialists understand how the mix of older clay systems and newer plastic drainage affects different properties, from cottages along The Street to modern family homes in newer developments.",
      commonProblems: ["Root intrusion from established village trees and hedgerows", "Fat and grease buildup from domestic kitchens", "Debris accumulation in older clay drainage systems", "Surface water blockages from leaf litter", "Shared drainage conflicts in terraced housing"],
      process: "We assess each Bramley blockage considering the property type, drainage age, and local conditions. Traditional village properties need different handling than modern estates, and our engineers adapt their approach accordingly.",
      localTip: "Bramley properties near the River Loddon should have drainage inspected after periods of heavy rainfall when groundwater levels can rise and affect pipe performance."
    },
    "drain-unblocking": {
      intro: "When Bramley drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From the village centre to the surrounding area, we handle residential drain unblocking with professional efficiency and minimal disruption to your home.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages in older properties", "Utility room drainage issues"],
      process: "Our Bramley engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Bramley's older village properties often have deep inspection chambers. Ensure access covers are in good condition and accessible for maintenance."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Bramley property's drainage is essential for proper maintenance and informed decision-making. Our CCTV surveys reveal the condition of pipes beneath your property, identifying issues that surface inspection cannot detect. This is particularly valuable where ground conditions vary across the village.",
      commonProblems: ["Unknown drainage routes in period properties", "Pipe condition assessment for home purchases", "Root ingress detection from mature gardens", "Joint and connection problems from ground settling", "Planning investigation for extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Bramley properties near the River Loddon may have complex drainage arrangements. Surveys help identify the full drainage layout before problems develop."
    },
    "drain-jetting": {
      intro: "Regular high-pressure jetting is valuable maintenance for Bramley's drainage systems. Our specialist equipment handles everything from clearing root masses in the village's older properties to descaling pipes in modern housing, maintaining optimal flow throughout the area.",
      commonProblems: ["Scale buildup from water supply", "Grease accumulation in residential drains", "Silt and sediment from nearby river", "Root fragments after cutting treatment", "General preventative maintenance cleaning"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting your pipe integrity. We verify results with flow testing.",
      localTip: "Bramley properties with gardens backing onto the Loddon valley experience more silt buildup — consider jetting every 12 months rather than the usual 18."
    },
    "emergency-drain-services": {
      intro: "Bramley drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded garden or sewage backup, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes on residential streets", "Collapsed drainage from ground movement", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Bramley's lower-lying areas near the River Loddon can experience rising water levels quickly after sustained rain. Keep emergency drain contacts readily available and know your manhole locations."
    },
    "drain-repairs": {
      intro: "Bramley's property stock spans traditional village cottages to modern family homes, and our drain repair expertise matches this diversity. From relining older pipes in the village centre to replacing damaged sections in newer developments, we provide repair solutions appropriate to each property type.",
      commonProblems: ["Cracked clay drainage in period properties", "Clay pipe deterioration from age", "Joint failures from ground movement", "Root damage from established trees", "Ground settling effects on newer developments"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Bramley's mix of chalk and clay-with-flints geology means ground conditions can vary — always commission a proper survey before planning drainage repair work."
    }
  },
  "sherborne-st-john": {
    "blocked-drains": {
      intro: "Sherborne St John's quiet village setting, close to the historic Vyne estate, comes with its own drainage considerations. Our engineers understand the differences between the village's period properties and more modern housing, and bring the right approach to every blocked drain callout in the area.",
      commonProblems: ["Root intrusion from established village trees", "Fat and grease buildup in domestic kitchens", "Debris in older clay pipe systems", "Long drainage runs to the public sewer", "Surface water issues from rural runoff"],
      process: "We assess each situation considering the property type, pipe age, and Sherborne St John's rural setting before selecting the most effective clearing method.",
      localTip: "Sherborne St John properties with longer drainage runs to the public sewer should have these inspected periodically, as the extended pipe length increases the risk of blockages and root ingress."
    },
    "drain-unblocking": {
      intro: "When drains block in Sherborne St John, our local team responds promptly with the right equipment. From period village properties to modern homes, we clear blockages efficiently while respecting your property and its rural setting.",
      commonProblems: ["Kitchen sink blockages", "Bathroom drain clogs", "External gulley obstructions from leaves and garden debris", "Long-run drainage blockages", "Private drainage system issues"],
      process: "Our engineers arrive with comprehensive unblocking equipment. We locate the blockage, select the appropriate clearing method, and restore full drainage flow, checking all connected fixtures before completing the job.",
      localTip: "Sherborne St John's rural setting means some properties have longer private drainage runs — knowing the approximate location of your drainage helps us diagnose problems faster."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Sherborne St John property's drainage is important for maintenance and informed decision-making. Our CCTV surveys provide detailed pipe condition assessments, particularly valuable for the village's period properties and those with extended private drainage systems.",
      commonProblems: ["Mapping unknown drainage routes", "Pre-purchase surveys for period properties", "Root ingress detection", "Long-run pipe condition assessment", "Private drainage system inspection"],
      process: "We survey Sherborne St John properties thoroughly, paying special attention to longer drainage runs and connections to the public sewer network. Reports are detailed and professional.",
      localTip: "Buying a property in Sherborne St John? Commission a full CCTV drain survey — rural properties may have private drainage systems that are your responsibility to maintain."
    },
    "drain-jetting": {
      intro: "High-pressure jetting effectively maintains Sherborne St John's drainage systems, from traditional clay pipes in period properties to modern plastic pipes in newer builds. Our specialist equipment clears the deposits that accumulate in local drainage.",
      commonProblems: ["Scale accumulation from hard water supply", "Grease buildup in residential drains", "Silt deposits in surface water drains", "Root fragments requiring clearance", "Long-run pipe cleaning"],
      process: "We match jetting equipment to your pipe type and condition. Period drainage receives careful, lower-pressure treatment, while modern systems can handle more thorough cleaning.",
      localTip: "Sherborne St John properties with longer drainage runs benefit from periodic jetting to prevent gradual buildup that can cause sudden blockages."
    },
    "emergency-drain-services": {
      intro: "Sherborne St John drainage emergencies receive rapid response from our local teams, day or night. Whether you're dealing with flooding or sewage backup, our engineers are available around the clock to protect your property.",
      commonProblems: ["Sewage backing up into properties", "Garden flooding from blocked drains", "Overflowing inspection chambers", "Collapsed drainage sections", "Private drainage system failures"],
      process: "Emergency calls from Sherborne St John receive immediate dispatch. We provide realistic arrival times and come prepared with appropriate equipment to contain damage and resolve the situation.",
      localTip: "Sherborne St John's rural setting means knowing your private drainage layout is especially important during emergencies — keep a drainage plan accessible if you have one."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Sherborne St John requires understanding the village's mix of period and modern properties. Our repair teams select methods and materials suited to each property's age and the local chalk and clay-with-flints ground conditions.",
      commonProblems: ["Cracked clay pipes in period properties", "Root damage from established trees", "Joint displacement from ground movement", "Deterioration of older pipe materials", "Long-run pipe repairs"],
      process: "We investigate thoroughly before recommending repairs. Our approach accounts for the village's ground conditions, using durable materials that provide long-lasting results. All repairs come with a workmanship guarantee.",
      localTip: "Sherborne St John's chalk and clay-with-flints geology can cause localised ground movement — ensure repairs use materials that accommodate slight ground shifts."
    }
  },
  "old-basing": {
    "blocked-drains": {
      intro: "Old Basing's rich history and wealth of period properties create unique drainage challenges. From centuries-old cottages near the Basing House ruins to modern developments along the village fringes, our Old Basing blocked drain service combines knowledge of traditional drainage with modern clearing techniques.",
      commonProblems: ["Root intrusion from established trees and hedgerows in mature gardens", "Fat and grease buildup in domestic kitchens", "Debris accumulation in centuries-old clay drainage", "Groundwater infiltration near the River Loddon", "Complex drainage layouts modified over many decades"],
      process: "We assess each Old Basing blockage considering the property's age, original drainage materials, and proximity to the River Loddon before selecting the most effective clearing method.",
      localTip: "Old Basing's period properties near the River Loddon should have drainage inspected regularly, as elevated groundwater can infiltrate damaged pipe joints and overwhelm the system."
    },
    "drain-unblocking": {
      intro: "When Old Basing drains need unblocking, our local team responds with the equipment and expertise to handle any situation. From historic village cottages to modern family homes, we clear blockages with professional efficiency and respect for your property.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions in mature gardens", "Interceptor trap blockages in period properties", "Groundwater-related drainage issues"],
      process: "Our Old Basing engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Old Basing's historic properties often have deep, original inspection chambers with complex layouts. Ensure access covers are maintained and accessible."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Old Basing property's drainage is essential, particularly for the village's many period properties where drainage layouts can be complex and poorly documented. Our CCTV surveys reveal the condition of pipes beneath your property, identifying issues that surface inspection cannot detect.",
      commonProblems: ["Mapping complex drainage in period properties", "Assessing drainage condition near the River Loddon", "Pre-purchase surveys for historic homes", "Root ingress from mature gardens", "Investigating recurring blockage causes"],
      process: "We systematically survey your accessible drainage, recording footage and mapping routes. This is especially important for Old Basing's period properties where drainage may have been modified repeatedly over the centuries.",
      localTip: "Buying a period property in Old Basing? Always commission a full CCTV drain survey — historic properties may have unexpected drainage features and modifications that require specialist attention."
    },
    "drain-jetting": {
      intro: "High-pressure jetting effectively maintains Old Basing's varied drainage systems, from traditional clay pipes in historic properties to modern plastic systems in newer developments. Our careful approach removes accumulated deposits while protecting the integrity of original drainage features.",
      commonProblems: ["Scale buildup from hard water supply", "Grease accumulation in residential drains", "Silt deposits from River Loddon proximity", "Root fragments after cutting treatment", "General preventative maintenance"],
      process: "We assess your drainage and select appropriate jetting equipment. Period drainage receives careful, lower-pressure treatment, while modern systems can handle more thorough cleaning. We verify results with flow testing.",
      localTip: "Old Basing properties near the River Loddon experience higher groundwater that can carry silt into drainage — regular jetting prevents gradual flow reduction."
    },
    "emergency-drain-services": {
      intro: "Old Basing drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing flooding near the River Loddon or sewage backup in the village, we're available around the clock to resolve the situation and protect your property from damage.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains near the river", "Overflowing manholes", "Collapsed drainage in historic pipe systems", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Old Basing properties near the River Loddon should maintain clear surface water drains year-round, as river levels can rise quickly after sustained rainfall and overwhelm nearby drainage systems."
    },
    "drain-repairs": {
      intro: "Old Basing's property stock spans centuries-old cottages to modern family homes, and our drain repair expertise matches this range. From relining original clay pipes in historic properties to replacing damaged sections in newer builds, we provide repair solutions appropriate to each property type and age.",
      commonProblems: ["Cracked clay drainage in historic properties", "Joint displacement from ground movement", "Root damage from established trees", "Groundwater infiltration through damaged joints", "Age-related material deterioration"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Old Basing's proximity to the River Loddon means seasonal groundwater changes — ensure repairs account for the local water table to prevent future infiltration issues."
    }
  }
};

/**
 * How It Works steps per service (with {location} and {responseTime} placeholders)
 */
export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with Southern Water infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and Southern Water"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and sewage situations across Basingstoke and surrounding areas"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across Basingstoke and surrounding areas and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across Basingstoke and surrounding areas. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across Basingstoke and surrounding areas and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}

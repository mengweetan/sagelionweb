// Local-niche placeholder imagery via Unsplash.
// Swap these for your own brand/store photos before launch.
const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  heroStore:  u('photo-1460925895917-afdab827c52f'),        // analytics dashboard on laptop
  checkout:   u('photo-1556742502-ec7c0e9f34b1'),           // cards / payment
  team:       u('photo-1522071820081-009f0129c71c', 1400),  // team collaborating
  founder:    'https://flowdaptor.ai/assets/FlowDaptor-Logo-Favicon.png',
  founder2:   u('photo-1573497019940-1c28c88b4f3e', 900),   // professional portrait
  founder3:   u('photo-1556157382-97eda2d62296', 900),      // professional portrait
  founder4:   u('photo-1573497019940-1c28c88b4f3e', 900),   // professional portrait
  workspace:  u('photo-1517245386807-bb43f82c33c4', 1400),  // bright workspace
  meeting:    u('photo-1543269865-cbf427effbad', 1400),     // meeting / strategy
  shop:       u('photo-1556742049-0cfed4f6a45d', 1200),     // shopping bags
}

export default images
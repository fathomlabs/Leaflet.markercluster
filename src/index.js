if (!globalThis.L) {
  try {
    globalThis.L = require('leaflet')
  } catch (e) {
    throw new Error('Leaflet is not available')
  }
}
export { MarkerClusterGroup } from './MarkerClusterGroup.js';
export { MarkerCluster } from './MarkerCluster.js';
import {} from './MarkerOpacity.js';
import {} from './DistanceGrid.js';
import {} from './MarkerCluster.QuickHull.js';
import {} from './MarkerCluster.Spiderfier.js';
import {} from './MarkerClusterGroup.Refresh.js';

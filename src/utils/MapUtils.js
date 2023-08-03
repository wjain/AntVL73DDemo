// 提供坐标转换
import * as Gcoord from "gcoord";

export function translate(point, origin, target) {
    return Gcoord.transform(point, Gcoord[origin], Gcoord(target));
}

// 目前支持百度地图和谷歌地图
export function loadMap(mapName,key) {
    // 
    //<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDk7f0Z7A1e4tL3b02CaxlNyUwSJBq3GfU&libraries=geometry,drawing&v=weekly"></script>
    
}

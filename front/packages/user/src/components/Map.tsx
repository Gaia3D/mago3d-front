import { useCreateViewer } from "@/hooks/useCreateViewer";
import { useRef } from "react";
import MapFunction from "./MapFunction";
import RasterProfileChart from "./RasterProfileChart";
import { PrintPortal } from "./maptool/PrintPortal";
import { MeasureDistance } from "./maptool/MeasureDistance";
import { MeasureArea } from "./maptool/MeasureArea";
import { MeasureAngle } from "./maptool/MeasureAngle";
import { MeasureComplex } from "./maptool/MeasureComplex";
import { SearchCoordinate } from "./maptool/SearchCoordinate";
import AnalysisFilter from "./analysis/Filter";
import AnalResult from "./analysis/AnalResult";

const Globe = () => {
    const cesiumContainer = useRef<HTMLDivElement>(null);
    useCreateViewer(cesiumContainer);
    return (
        <div id="globe" ref={cesiumContainer} style={{float:"right", height:"100vh", width:"calc( 100% - 350px)", backgroundColor:"gray"}}>
            <MapFunction />
            <RasterProfileChart />
            <PrintPortal />
            <MeasureDistance />
            <MeasureArea />
            <MeasureAngle />
            <MeasureComplex />
            <SearchCoordinate />
            <AnalysisFilter />
            <AnalResult />
        </div>
    )
}

export default Globe;
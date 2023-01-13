import Color from "@arcgis/core/Color";
import Collection from "@arcgis/core/core/Collection";
import Polyline from "@arcgis/core/geometry/Polyline";
import Graphic from "@arcgis/core/Graphic";
import LineSymbolMarker from "@arcgis/core/symbols/LineSymbolMarker";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import {
  CalciteAction,
  CalciteLabel,
  CalciteLoader,
  CalcitePanel,
  CalciteShell,
  CalciteShellPanel,
  CalciteSwitch,
} from "@esri/calcite-components-react";
import { lazy, Suspense, useRef, useState } from "react";
import SimpleLineSymbolForm from "../components/SimpleLineSymbolForm";
import { formStyles, shellStyles, viewSwitchLabelStyles } from "../lib/styles";

const MapView = lazy(() => import("../components/MapView"));
const SceneView = lazy(() => import("../components/SceneView"));

type CapOption = "butt" | "round" | "square";
type JoinOption = "miter" | "round" | "bevel";
type MarkerPlacementOption = "begin" | "end" | "begin-end";
type MarkerStyleOption =
  | "arrow"
  | "circle"
  | "square"
  | "diamond"
  | "cross"
  | "x";

type StyleOption =
  | "dash"
  | "dash-dot"
  | "dot"
  | "long-dash"
  | "long-dash-dot"
  | "long-dash-dot-dot"
  | "none"
  | "short-dash"
  | "short-dash-dot"
  | "short-dash-dot-dot"
  | "short-dot"
  | "solid";

const SimpleLineSymbolPage = () => {
  const viewSwitchRef = useRef(null);

  const [simpleLineSymbol, setSimpleLineSymbol] = useState(
    new SimpleLineSymbol({
      color: "#007ac2",
      width: 2,
    })
  );

  const [lineSymbolMarker, setLineSymbolMarker] = useState(
    new LineSymbolMarker({
      color: "#007ac2",
    })
  );

  const polyline = new Polyline({
    paths: [
      [
        [-105.0, 40.0],
        [-105.1, 40.2],
        [-105.35, 40.1],
      ],
    ],
  });

  const polylineGraphic = new Graphic({
    geometry: polyline,
    symbol: simpleLineSymbol,
  });

  const graphicsCollection = new Collection();
  graphicsCollection.add(polylineGraphic);

  const [graphics, setGraphics] =
    useState<Collection<Graphic>>(graphicsCollection);

  const [sceneView, setSceneView] = useState(false);
  let view = <MapView graphics={graphics} />;
  if (sceneView) {
    view = <SceneView graphics={graphics} />;
  }

  const handleSwitchChange = () => {
    if (viewSwitchRef.current) {
      setSceneView((viewSwitchRef.current as HTMLCalciteSwitchElement).checked);
    }
  };

  const updateGraphics = (newSimpleLineSymbol: SimpleLineSymbol) => {
    setSimpleLineSymbol(newSimpleLineSymbol);

    const newPolylineGraphic = graphics.getItemAt(0).clone();
    newPolylineGraphic.symbol = newSimpleLineSymbol;

    const newGraphics = new Collection();
    newGraphics.add(newPolylineGraphic);
    setGraphics(newGraphics);
  };

  const handleCapChange = (currentCapValue: CapOption) => {
    const newSimpleLineSymbol = simpleLineSymbol.clone();
    newSimpleLineSymbol.cap = currentCapValue;
    updateGraphics(newSimpleLineSymbol);
  };

  const handleColorChange = (currentColor: string) => {
    const newSimpleLineSymbol = simpleLineSymbol.clone();
    newSimpleLineSymbol.color = new Color(currentColor);
    updateGraphics(newSimpleLineSymbol);
  };

  const handleJoinChange = (currentJoinValue: JoinOption) => {
    const newSimpleLineSymbol = simpleLineSymbol.clone();
    newSimpleLineSymbol.join = currentJoinValue;
    updateGraphics(newSimpleLineSymbol);
  };

  const handleMarkerBlockToggle = (
    currentMarkerBlock: HTMLCalciteBlockElement
  ) => {
    if (currentMarkerBlock.heading == "marker") {
      const newSimpleLineSymbol = simpleLineSymbol.clone();
      if (currentMarkerBlock.open) {
        newSimpleLineSymbol.marker = lineSymbolMarker;
        setLineSymbolMarker(newSimpleLineSymbol.marker as LineSymbolMarker);
        updateGraphics(newSimpleLineSymbol);
      } else {
        newSimpleLineSymbol.marker = null;
        updateGraphics(newSimpleLineSymbol);
      }
    }
  };

  const handleMarkerColorChange = (currentColor: string) => {
    const newSimpleLineSymbol = simpleLineSymbol.clone();
    if (newSimpleLineSymbol.marker) {
      newSimpleLineSymbol.marker.color = new Color(currentColor);
    }

    setLineSymbolMarker(newSimpleLineSymbol.marker as LineSymbolMarker);
    updateGraphics(newSimpleLineSymbol);
  };

  const handleMarkerPlacementChange = (
    currentPlacementValue: MarkerPlacementOption
  ) => {
    const newSimpleLineSymbol = simpleLineSymbol.clone();
    if (newSimpleLineSymbol.marker) {
      newSimpleLineSymbol.marker.placement = currentPlacementValue;
    }

    setLineSymbolMarker(newSimpleLineSymbol.marker as LineSymbolMarker);
    updateGraphics(newSimpleLineSymbol);
  };

  const handleMarkerStyleChange = (currentMarkerStyle: MarkerStyleOption) => {
    const newSimpleLineSymbol = simpleLineSymbol.clone();
    if (newSimpleLineSymbol.marker) {
      newSimpleLineSymbol.marker.style = currentMarkerStyle;
    }

    setLineSymbolMarker(newSimpleLineSymbol.marker as LineSymbolMarker);
    updateGraphics(newSimpleLineSymbol);
  };

  const handleMiterLimitChange = (currentMiterLimitValue: string) => {
    const newSimpleLineSymbol = simpleLineSymbol.clone();
    newSimpleLineSymbol.miterLimit = Number(currentMiterLimitValue);
    updateGraphics(newSimpleLineSymbol);
  };

  const handleStyleChange = (currentStyleValue: StyleOption) => {
    const newSimpleLineSymbol = simpleLineSymbol.clone();
    newSimpleLineSymbol.style = currentStyleValue;
    updateGraphics(newSimpleLineSymbol);
  };

  const handleWidthChange = (currentWidthValue: string) => {
    const newSimpleLineSymbol = simpleLineSymbol.clone();
    newSimpleLineSymbol.width = Number(currentWidthValue);
    updateGraphics(newSimpleLineSymbol);
  };

  const handleCopyJSONClick = () => {
    navigator.clipboard.writeText(
      JSON.stringify(simpleLineSymbol.toJSON(), null, 2)
    );
  };

  return (
    <CalciteShell style={shellStyles}>
      <Suspense
        fallback={
          <CalciteLoader label="loading" text="loading" type="indeterminate" />
        }
      >
        {view}
      </Suspense>
      <CalciteShellPanel
        slot="panel-start"
        position="start"
        resizable
        widthScale="l"
      >
        <CalcitePanel>
          <div slot="header-content">Properties </div>

          <CalciteLabel
            slot="header-actions-end"
            layout="inline"
            style={viewSwitchLabelStyles}
          >
            SceneView
            <CalciteSwitch
              ref={viewSwitchRef}
              onCalciteSwitchChange={handleSwitchChange}
            ></CalciteSwitch>
          </CalciteLabel>

          <form style={formStyles}>
            <SimpleLineSymbolForm
              handleCapChange={handleCapChange}
              handleColorChange={handleColorChange}
              handleJoinChange={handleJoinChange}
              handleMarkerBlockToggle={handleMarkerBlockToggle}
              handleMarkerColorChange={handleMarkerColorChange}
              handleMarkerPlacementChange={handleMarkerPlacementChange}
              handleMarkerStyleChange={handleMarkerStyleChange}
              handleMiterLimitChange={handleMiterLimitChange}
              handleStyleChange={handleStyleChange}
              handleWidthChange={handleWidthChange}
              showMarker={true}
            ></SimpleLineSymbolForm>
          </form>
        </CalcitePanel>

        <CalcitePanel>
          <div slot="header-content">JSON</div>
          <CalciteAction
            icon="copy-to-clipboard"
            label="Copy code to clipboard"
            text="Copy JSON"
            textEnabled
            slot="header-actions-end"
            onClick={handleCopyJSONClick}
          ></CalciteAction>
          <pre>{JSON.stringify(simpleLineSymbol.toJSON(), null, 2)}</pre>
        </CalcitePanel>
      </CalciteShellPanel>
    </CalciteShell>
  );
};

export default SimpleLineSymbolPage;

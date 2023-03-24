import {
  CalciteBlock,
  CalciteInputNumber,
  CalciteLabel,
  CalciteOption,
  CalciteSelect
} from "@esri/calcite-components-react";
import React, { useState } from "react";
import IconSymbol3DLayerAnchorPositionForm from "./IconSymbol3DLayerAnchorPositionForm";
import IconSymbol3DLayerMaterialForm from "./IconSymbol3DLayerMaterialForm";
import IconSymbol3DLayerOutlineForm from "./IconSymbol3DLayerOutlineForm";
import IconSymbol3DLayerResourceForm from "./IconSymbol3DLayerResourceForm";
import { ICON_SYMBOL_3D_LAYER_ANCHOR_OPTIONS } from "./lib/constants";
import { blockStyles, labelStyles } from "./lib/styles";
import { IconSymbol3DLayerAnchor, IconSymbol3DLayerResourcePrimitive } from "./lib/types";

interface Props {
  layerIndex: number;
  handleIconSymbol3DLayerAnchorChange: (layerIndex: number, value: IconSymbol3DLayerAnchor) => void;
  handleIconSymbol3DLayerAnchorPositionXChange: (layerIndex: number, value: string) => void;
  handleIconSymbol3DLayerAnchorPositionYChange: (layerIndex: number, value: string) => void;
  handleIconSymbol3DLayerMaterialColorChange: (layerIndex: number, value: string) => void;
  handleIconSymbol3DLayerOutlineColorChange: (layerIndex: number, value: string) => void;
  handleIconSymbol3DLayerOutlineSizeChange: (layerIndex: number, value: string) => void;
  handleIconSymbol3DLayerResourceHrefChange: (layerIndex: number, value: string) => void;
  handleIconSymbol3DLayerResourcePrimitiveChange: (
    layerIndex: number,
    value: IconSymbol3DLayerResourcePrimitive
  ) => void;
  handleSizeChange: (layerIndex: number, value: string) => void;
}

const IconSymbol3DLayerForm = ({
  layerIndex,
  handleIconSymbol3DLayerAnchorChange,
  handleIconSymbol3DLayerAnchorPositionXChange,
  handleIconSymbol3DLayerAnchorPositionYChange,
  handleIconSymbol3DLayerMaterialColorChange,
  handleIconSymbol3DLayerOutlineColorChange,
  handleIconSymbol3DLayerOutlineSizeChange,
  handleIconSymbol3DLayerResourceHrefChange,
  handleIconSymbol3DLayerResourcePrimitiveChange,
  handleSizeChange
}: Props) => {
  const [anchor, setAnchor] = useState("center");
  const [size, setSize] = useState("12");

  return (
    <React.Fragment>
      <CalciteLabel layout="default" style={labelStyles}>
        anchor
        <CalciteSelect
          label={"anchor selection"}
          onCalciteSelectChange={(event) => {
            setAnchor(event.target.value);
            handleIconSymbol3DLayerAnchorChange(
              layerIndex,
              event.target.value as IconSymbol3DLayerAnchor
            );
          }}
          value={anchor}
        >
          {ICON_SYMBOL_3D_LAYER_ANCHOR_OPTIONS.map((option, index) => (
            <CalciteOption key={index}>{option}</CalciteOption>
          ))}
        </CalciteSelect>
      </CalciteLabel>

      {anchor === "relative" && (
        <CalciteBlock style={blockStyles} collapsible heading={"anchorPosition"}>
          <IconSymbol3DLayerAnchorPositionForm
            layerIndex={layerIndex}
            handleIconSymbol3DLayerAnchorPositionXChange={
              handleIconSymbol3DLayerAnchorPositionXChange
            }
            handleIconSymbol3DLayerAnchorPositionYChange={
              handleIconSymbol3DLayerAnchorPositionYChange
            }
          ></IconSymbol3DLayerAnchorPositionForm>
        </CalciteBlock>
      )}

      <CalciteBlock style={blockStyles} collapsible heading={"material"}>
        <IconSymbol3DLayerMaterialForm
          layerIndex={layerIndex}
          handleColorChange={handleIconSymbol3DLayerMaterialColorChange}
        ></IconSymbol3DLayerMaterialForm>
      </CalciteBlock>

      <CalciteBlock style={blockStyles} collapsible heading={"outline"}>
        <IconSymbol3DLayerOutlineForm
          layerIndex={layerIndex}
          handleColorChange={handleIconSymbol3DLayerOutlineColorChange}
          handleSizeChange={handleIconSymbol3DLayerOutlineSizeChange}
        ></IconSymbol3DLayerOutlineForm>
      </CalciteBlock>

      <CalciteBlock style={blockStyles} collapsible heading={"resource"}>
        <IconSymbol3DLayerResourceForm
          layerIndex={layerIndex}
          handleHrefChange={handleIconSymbol3DLayerResourceHrefChange}
          handlePrimitiveChange={handleIconSymbol3DLayerResourcePrimitiveChange}
        ></IconSymbol3DLayerResourceForm>
      </CalciteBlock>

      <CalciteLabel layout="default" style={labelStyles}>
        size
        <CalciteInputNumber
          label={"size input"}
          min={0}
          onCalciteInputNumberChange={(event) => {
            setSize(event.target.value);
            handleSizeChange(layerIndex, event.target.value);
          }}
          value={size}
        ></CalciteInputNumber>
      </CalciteLabel>
    </React.Fragment>
  );
};

export default IconSymbol3DLayerForm;

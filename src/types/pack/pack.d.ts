interface IPack extends IGraph {
  cells: IGraphCells & IPackCells;
  features: TPackFeatures;
  states: TStates;
  cultures: TCultures;
  provinces: IProvince[];
  burgs: TBurgs;
  rivers: IRiver[];
  religions: IReligion[];
}

interface IPackCells {
  p: TPoints; // cell center points
  h: Uint8Array; // heights, [0, 100], see MIN_LAND_HEIGHT constant
  t: Int8Array; // see DISTANCE_FIELD enum
  f: Uint16Array; // feature id, see TPackFeature
  g: UintArray;
  s: IntArray;
  pop: Float32Array;
  fl: Uint16Array; // flux volume, defined by drainWater() in river-generator.ts
  r: Uint16Array; // river id, defined by defineRivers() in river-generator.ts
  conf: Uint16Array; // conluence, defined by defineRivers() in river-generator.ts
  biome: Uint8Array;
  area: UintArray;
  state: UintArray;
  culture: Uint16Array;
  religion: UintArray;
  province: UintArray;
  burg: UintArray;
  haven: UintArray;
  harbor: UintArray;
  road: Uint8Array;
  q: Quadtree;
}

interface IPackBase extends IGraph {
  cells: IGraphCells & Partial<IPackCells>;
  features?: TPackFeatures;
}

interface IProvince {
  i: number;
  name: string;
  fullName: string;
  removed?: boolean;
}

interface IReligion {
  i: number;
  name: string;
  type: "Folk" | "Orgamized" | "Cult" | "Heresy";
  removed?: boolean;
}

interface IRiver {
  i: number;
  name: string;
  basin: number;
  parent: number;
  type: string;
  source: number;
  mouth: number;
  sourceWidth: number;
  width: number;
  widthFactor: number;
  length: number;
  discharge: number;
  cells: number[];
  points?: number[];
}

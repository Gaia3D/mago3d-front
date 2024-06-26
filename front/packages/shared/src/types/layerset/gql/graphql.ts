/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An arbitrary precision signed decimal */
  BigDecimal: { input: any; output: any; }
  /** An arbitrary precision signed integer */
  BigInteger: { input: any; output: any; }
  /** An 8-bit signed integer */
  Byte: { input: any; output: any; }
  /** A UTF-16 code unit; a character on Unicode's BMP */
  Char: { input: any; output: any; }
  /** An RFC-3339 compliant Full Date Scalar */
  Date: { input: any; output: any; }
  /** A slightly refined version of RFC-3339 compliant DateTime Scalar */
  DateTime: { input: any; output: any; }
  /** A JSON scalar */
  JSON: { input: any; output: any; }
  /** A 64-bit signed integer */
  Long: { input: any; output: any; }
  /** A 16-bit signed integer */
  Short: { input: any; output: any; }
  /** An RFC-3339 compliant Full Time Scalar */
  Time: { input: any; output: any; }
  /** A universally unique identifier compliant UUID Scalar */
  UUID: { input: any; output: any; }
};

/**
 * ##################################################################################
 * # Input
 * ##################################################################################
 */
export type AccessCriteria = {
  eq?: InputMaybe<LayerAccess>;
  in?: InputMaybe<Array<InputMaybe<LayerAccess>>>;
  ne?: InputMaybe<LayerAccess>;
};

export type AssetFilterInput = {
  access?: InputMaybe<CommonCriteria>;
  and?: InputMaybe<Array<AssetFilterInput>>;
  enabled?: InputMaybe<BooleanCriteria>;
  id?: InputMaybe<SimpleCriteria>;
  name?: InputMaybe<StringCriteria>;
  not?: InputMaybe<AssetFilterInput>;
  or?: InputMaybe<Array<AssetFilterInput>>;
};

export type BooleanCriteria = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  ge?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  le?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  max?: InputMaybe<BooleanCriteria>;
  min?: InputMaybe<BooleanCriteria>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  notBetween?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

export type ChannelOptions = {
  gamma?: InputMaybe<Scalars['Float']['input']>;
  mode?: InputMaybe<ContrastMethod>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Channels = {
  blue?: InputMaybe<ChannelOptions>;
  gray?: InputMaybe<ChannelOptions>;
  green?: InputMaybe<ChannelOptions>;
  red?: InputMaybe<ChannelOptions>;
};

export type CogInput = {
  dataAssetId?: InputMaybe<Scalars['ID']['input']>;
};

export type ColorMapEntry = {
  bandValue?: InputMaybe<Scalars['Float']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  entryOpacity?: InputMaybe<Scalars['Float']['input']>;
  textLabel?: InputMaybe<Scalars['String']['input']>;
};

export enum ColorMapType {
  Intervals = 'INTERVALS',
  Ramp = 'RAMP',
  Values = 'VALUES'
}

export type CommonCriteria = {
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  ge?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  le?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  max?: InputMaybe<CommonCriteria>;
  min?: InputMaybe<CommonCriteria>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  notBetween?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export enum ContrastMethod {
  Histogram = 'HISTOGRAM',
  Normalize = 'NORMALIZE'
}

export type CoverageInput = {
  dataAssetId?: InputMaybe<Scalars['ID']['input']>;
  workspace?: Scalars['String']['input'];
};

/**
 * ##################################################################################
 * # Create
 * ##################################################################################
 */
export type CreateAssetInput = {
  access?: LayerAccess;
  context: PublishContextValue;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: Scalars['Boolean']['input'];
  groupIds: Array<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  properties?: InputMaybe<Scalars['JSON']['input']>;
  type: LayerAssetType;
  visible?: Scalars['Boolean']['input'];
};

export type CreateAssetResponse = WithAuditable & WithJsonProperty & {
  __typename?: 'CreateAssetResponse';
  access?: Maybe<LayerAccess>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  properties?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<LayerAssetStatus>;
  type?: Maybe<LayerAssetType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  visible: Scalars['Boolean']['output'];
};

/**
 * ##################################################################################
 * # Create
 * ##################################################################################
 */
export type CreateGroupInput = {
  access?: LayerAccess;
  collapsed?: Scalars['Boolean']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  properties?: InputMaybe<Scalars['JSON']['input']>;
  published?: Scalars['Boolean']['input'];
};

export type CreateGroupResponse = WithAuditable & {
  __typename?: 'CreateGroupResponse';
  access: LayerAccess;
  children?: Maybe<Array<Maybe<LayerGroup>>>;
  collapsed: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<LayerGroup>;
  published: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

/**
 * ##################################################################################
 * # Create
 * #################################################################################
 */
export type CreateLabelInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CreateLabelResponse = WithAuditable & {
  __typename?: 'CreateLabelResponse';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/**
 * ##################################################################################
 * # Create
 * #################################################################################
 */
export type CreateStyleInput = {
  access?: LayerAccess;
  context: StyleContextValue;
  defaultStatus?: Scalars['Boolean']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: Scalars['Boolean']['input'];
  format?: LayerStyleFormat;
  name: Scalars['String']['input'];
  properties?: InputMaybe<Scalars['JSON']['input']>;
};

export type CreateStyleResponse = WithAuditable & {
  __typename?: 'CreateStyleResponse';
  access?: Maybe<LayerAccess>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  defaultStatus?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  format?: Maybe<LayerStyleFormat>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type CreateUserAssetInput = {
  assetId: Scalars['ID']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * ##################################################################################
 * # Create
 * ##################################################################################
 */
export type CreateUserGroupInput = {
  assets?: InputMaybe<Array<CreateUserAssetInput>>;
  children?: InputMaybe<Array<CreateUserGroupInput>>;
  collapsed?: InputMaybe<Scalars['Boolean']['input']>;
  groupId: Scalars['ID']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<CreateUserGroupInput>;
};

export type DateCriteria = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  ge?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  le?: InputMaybe<Scalars['Date']['input']>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  max?: InputMaybe<DateCriteria>;
  min?: InputMaybe<DateCriteria>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  notBetween?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type DateTimeCriteria = {
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  ge?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  le?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  max?: InputMaybe<DateTimeCriteria>;
  min?: InputMaybe<DateTimeCriteria>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  notBetween?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type F4DInput = {
  dataAssetId?: InputMaybe<Scalars['ID']['input']>;
};

export type FeatureInput = {
  dataAssetId?: InputMaybe<Scalars['ID']['input']>;
  store?: Scalars['String']['input'];
  workspace?: Scalars['String']['input'];
};

export type FloatCriteria = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  max?: InputMaybe<FloatCriteria>;
  min?: InputMaybe<FloatCriteria>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  notBetween?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type GroupFilterInput = {
  access?: InputMaybe<CommonCriteria>;
  and?: InputMaybe<Array<GroupFilterInput>>;
  enabled?: InputMaybe<BooleanCriteria>;
  id?: InputMaybe<SimpleCriteria>;
  name?: InputMaybe<StringCriteria>;
  not?: InputMaybe<GroupFilterInput>;
  or?: InputMaybe<Array<GroupFilterInput>>;
  parentId?: InputMaybe<SimpleCriteria>;
  userId?: InputMaybe<SimpleCriteria>;
};

export type IntCriteria = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  max?: InputMaybe<IntCriteria>;
  min?: InputMaybe<IntCriteria>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notBetween?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type JsonPropertyInput = {
  /**  Using RFC6902 JSON Patch */
  merge?: InputMaybe<Scalars['JSON']['input']>;
  patch?: InputMaybe<Array<InputMaybe<JsonPropertyPatchInput>>>;
};

export type JsonPropertyPatchInput = {
  from?: InputMaybe<Scalars['String']['input']>;
  op: JsonPropertyPatchOperation;
  path: Scalars['String']['input'];
  value?: InputMaybe<Scalars['JSON']['input']>;
};

/**
 * #################################################################
 * # JsonProperty
 * #################################################################
 */
export enum JsonPropertyPatchOperation {
  Add = 'add',
  Copy = 'copy',
  Move = 'move',
  Remove = 'remove',
  Replace = 'replace',
  Test = 'test'
}

export type LabelFilter = {
  and?: InputMaybe<Array<LabelFilter>>;
  description?: InputMaybe<StringCriteria>;
  enabled?: InputMaybe<BooleanCriteria>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<StringCriteria>;
  not?: InputMaybe<LabelFilter>;
  or?: InputMaybe<Array<LabelFilter>>;
  value?: InputMaybe<StringCriteria>;
};

export enum LayerAccess {
  Default = 'Default',
  Inherit = 'Inherit',
  Private = 'Private',
  Protected = 'Protected',
  Public = 'Public'
}

/**
 * ##################################################################################
 * # Query
 * ##################################################################################
 */
export type LayerAsset = WithAuditable & WithJsonProperty & {
  __typename?: 'LayerAsset';
  access?: Maybe<LayerAccess>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  groups?: Maybe<Array<Maybe<LayerGroup>>>;
  id: Scalars['ID']['output'];
  logs?: Maybe<Array<Maybe<LayerAssetLog>>>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  properties?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<LayerAssetStatus>;
  styles?: Maybe<Array<Maybe<LayerStyle>>>;
  type?: Maybe<LayerAssetType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  visible?: Maybe<Scalars['Boolean']['output']>;
};

export enum LayerAssetCreateStatus {
  Done = 'DONE',
  Error = 'ERROR',
  Init = 'INIT',
  Ready = 'READY',
  Running = 'RUNNING'
}

/**
 * ##################################################################################
 * # Locate
 * ##################################################################################
 */
export type LayerAssetInfo = {
  groupId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};

export type LayerAssetLog = WithAuditable & {
  __typename?: 'LayerAssetLog';
  assetId: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

/**
 * ##################################################################################
 * # ENUM
 * ##################################################################################
 */
export enum LayerAssetStatus {
  Done = 'DONE',
  Error = 'ERROR',
  Init = 'INIT',
  Ready = 'READY',
  Running = 'RUNNING'
}

export enum LayerAssetType {
  Cog = 'COG',
  F4D = 'F4D',
  Layergroup = 'LAYERGROUP',
  Raster = 'RASTER',
  Smarttile = 'SMARTTILE',
  Tiles3D = 'TILES3D',
  Vector = 'VECTOR'
}

/**
 * ##################################################################################
 * # Query
 * ##################################################################################
 */
export type LayerGroup = WithAuditable & {
  __typename?: 'LayerGroup';
  access: LayerAccess;
  assets: Array<LayerAsset>;
  children: Array<LayerGroup>;
  collapsed: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<LayerGroup>;
  published: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

/**
 * ##################################################################################
 * # Query
 * ##################################################################################
 */
export type LayerLabel = {
  __typename?: 'LayerLabel';
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/**
 * ##################################################################################
 * # Query
 * ##################################################################################
 */
export type LayerStyle = {
  __typename?: 'LayerStyle';
  access?: Maybe<LayerAccess>;
  context?: Maybe<Scalars['JSON']['output']>;
  defaultStatus?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  format?: Maybe<LayerStyleFormat>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum LayerStyleFormat {
  Geostyler = 'Geostyler',
  Json = 'JSON',
  Mapbox = 'Mapbox',
  Mapfile = 'Mapfile',
  Openlayers = 'Openlayers',
  Qml = 'QML',
  Sld = 'SLD'
}

export type LineStyleInput = {
  graphicFillStyle?: InputMaybe<PointStyleInput>;
  graphicStrokeStyle?: InputMaybe<PointStyleInput>;
  strokeColor?: InputMaybe<Scalars['String']['input']>;
  strokeDasharray?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  strokeDashoffset?: InputMaybe<Scalars['Float']['input']>;
  strokeLinecap?: InputMaybe<Linecap>;
  strokeLinejoin?: InputMaybe<Linejoin>;
  strokeOpacity?: InputMaybe<Scalars['Float']['input']>;
  strokeWidth?: InputMaybe<Scalars['Float']['input']>;
};

export enum Linecap {
  Butt = 'BUTT',
  Round = 'ROUND',
  Square = 'SQUARE'
}

export enum Linejoin {
  Bevel = 'BEVEL',
  Mitre = 'MITRE',
  Round = 'ROUND'
}

export type LocateAssetInput = {
  option: LocateOption;
  source: LayerAssetInfo;
  target: LayerAssetInfo;
};

export type LocateGroupInput = {
  option?: InputMaybe<LocateOption>;
  target?: InputMaybe<Scalars['ID']['input']>;
};

export enum LocateOption {
  After = 'AFTER',
  Before = 'BEFORE',
  FirstChild = 'FIRST_CHILD',
  LastChild = 'LAST_CHILD'
}

export type LongCriteria = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  eq?: InputMaybe<Scalars['Long']['input']>;
  ge?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  le?: InputMaybe<Scalars['Long']['input']>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  max?: InputMaybe<LongCriteria>;
  min?: InputMaybe<LongCriteria>;
  ne?: InputMaybe<Scalars['Long']['input']>;
  notBetween?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  applyAssetRemoteStyle: Scalars['Boolean']['output'];
  applyAssetStyle: LayerAsset;
  /**  Asset */
  createAsset: CreateAssetResponse;
  /**  Group */
  createGroup: CreateGroupResponse;
  /**  Label */
  createLabel: CreateLabelResponse;
  /**  Style */
  createStyle: CreateStyleResponse;
  deleteAsset: Scalars['Boolean']['output'];
  deleteGroup: Scalars['Boolean']['output'];
  deleteLabel: Scalars['Boolean']['output'];
  deleteStyle: Scalars['Boolean']['output'];
  locateAsset: LayerAsset;
  locateGroup: LayerGroup;
  /**  RemoteAsset */
  reloadRemoteAsset: Scalars['Boolean']['output'];
  /**  User */
  saveUserLayer: Array<Maybe<UserLayerGroup>>;
  updateAsset: UpdateAssetResponse;
  updateGroup: UpdateGroupResponse;
  updateLabel: UpdateLabelResponse;
  updateStyle: UpdateStyleResponse;
};


export type MutationApplyAssetRemoteStyleArgs = {
  id: Scalars['ID']['input'];
  styleName: Scalars['String']['input'];
};


export type MutationApplyAssetStyleArgs = {
  id: Scalars['ID']['input'];
  styleId: Scalars['ID']['input'];
};


export type MutationCreateAssetArgs = {
  input: CreateAssetInput;
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};


export type MutationCreateLabelArgs = {
  input: CreateLabelInput;
};


export type MutationCreateStyleArgs = {
  input: CreateStyleInput;
};


export type MutationDeleteAssetArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteGroupArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteLabelArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteStyleArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationLocateAssetArgs = {
  input: LocateAssetInput;
};


export type MutationLocateGroupArgs = {
  id: Scalars['ID']['input'];
  input: LocateGroupInput;
};


export type MutationReloadRemoteAssetArgs = {
  layerKey: Scalars['String']['input'];
};


export type MutationSaveUserLayerArgs = {
  input?: InputMaybe<Array<InputMaybe<CreateUserGroupInput>>>;
};


export type MutationUpdateAssetArgs = {
  id: Scalars['ID']['input'];
  input: UpdateAssetInput;
};


export type MutationUpdateGroupArgs = {
  id: Scalars['ID']['input'];
  input: UpdateGroupInput;
};


export type MutationUpdateLabelArgs = {
  id: Scalars['ID']['input'];
  input: UpdateLabelInput;
};


export type MutationUpdateStyleArgs = {
  id: Scalars['ID']['input'];
  input: UpdateStyleInput;
};

export type OwnerCriteria = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['UUID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

/**
 * #################################################################
 * # Pagination
 * #################################################################
 */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['ID']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['ID']['output'];
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  /**  Number of items per page */
  hasNextPage: Scalars['Boolean']['output'];
  /**  if there is a next page */
  hasPreviousPage: Scalars['Boolean']['output'];
  /**  the total amount of elements */
  page: Scalars['Int']['output'];
  /**  Current page number */
  size: Scalars['Int']['output'];
  /**  the number of total pages */
  totalItems: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PointStyleInput = {
  fillColor?: InputMaybe<Scalars['String']['input']>;
  fillOpacity?: InputMaybe<Scalars['Float']['input']>;
  rotation?: InputMaybe<Scalars['Float']['input']>;
  shape?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  strokeColor?: InputMaybe<Scalars['String']['input']>;
  strokeDasharray?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  strokeDashoffset?: InputMaybe<Scalars['Float']['input']>;
  strokeLinecap?: InputMaybe<Linecap>;
  strokeLinejoin?: InputMaybe<Linejoin>;
  strokeOpacity?: InputMaybe<Scalars['Float']['input']>;
  strokeWidth?: InputMaybe<Scalars['Float']['input']>;
};

export type PolygonStyleInput = {
  fillColor?: InputMaybe<Scalars['String']['input']>;
  fillGraphic?: InputMaybe<PointStyleInput>;
  fillOpacity?: InputMaybe<Scalars['Float']['input']>;
  graphicFillStyle?: InputMaybe<PointStyleInput>;
  graphicStrokeStyle?: InputMaybe<PointStyleInput>;
  strokeColor?: InputMaybe<Scalars['String']['input']>;
  strokeDasharray?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  strokeDashoffset?: InputMaybe<Scalars['Float']['input']>;
  strokeLinecap?: InputMaybe<Linecap>;
  strokeLinejoin?: InputMaybe<Linejoin>;
  strokeOpacity?: InputMaybe<Scalars['Float']['input']>;
  strokeWidth?: InputMaybe<Scalars['Float']['input']>;
};

export type PublishContextValue = {
  cog?: InputMaybe<CogInput>;
  coverage?: InputMaybe<CoverageInput>;
  f4d?: InputMaybe<F4DInput>;
  feature?: InputMaybe<FeatureInput>;
  remote?: InputMaybe<RemoteInput>;
  remoteT3d?: InputMaybe<RemoteT3DInput>;
  smartTile?: InputMaybe<SmartTileInput>;
  t3d?: InputMaybe<T3DInput>;
};

export type Query = {
  __typename?: 'Query';
  asset: LayerAsset;
  /**  Asset */
  assets: Array<Maybe<LayerAsset>>;
  group: LayerGroup;
  /**  Group */
  groups: Array<Maybe<LayerGroup>>;
  /**  Label */
  label: LayerLabel;
  /**  RemoteAsset */
  remote?: Maybe<Scalars['JSON']['output']>;
  remoteAssets: Array<Maybe<RemoteLayerAsset>>;
  remoteStyles: Array<Maybe<RemoteLayerStyle>>;
  /**  Style */
  style: LayerStyle;
  userAsset: UserLayerAsset;
  /**  UserLayerAsset */
  userAssets: Array<Maybe<UserLayerAsset>>;
  userGroup: UserLayerGroup;
  /**  UserLayerGroup */
  userGroups: Array<Maybe<UserLayerGroup>>;
};


export type QueryAssetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAssetsArgs = {
  filter?: InputMaybe<AssetFilterInput>;
};


export type QueryGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGroupsArgs = {
  filter?: InputMaybe<GroupFilterInput>;
};


export type QueryLabelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRemoteArgs = {
  href: Scalars['String']['input'];
};


export type QueryRemoteStylesArgs = {
  filter?: InputMaybe<RemoteStyleFilterInput>;
};


export type QueryStyleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserAssetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserAssetsArgs = {
  filter?: InputMaybe<UserAssetFilterInput>;
};


export type QueryUserGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserGroupsArgs = {
  filter?: InputMaybe<UserGroupFilterInput>;
};

export type RasterStyleInput = {
  channels?: InputMaybe<Channels>;
  entries?: InputMaybe<Array<InputMaybe<ColorMapEntry>>>;
  gamma?: InputMaybe<Scalars['Float']['input']>;
  mode?: InputMaybe<ContrastMethod>;
  opacity?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<ColorMapType>;
};

export type RemoteInput = {
  href: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type RemoteLayerAsset = {
  __typename?: 'RemoteLayerAsset';
  href?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type RemoteLayerStyle = {
  __typename?: 'RemoteLayerStyle';
  href: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: StyleType;
};

export type RemoteStyleFilterInput = {
  type?: InputMaybe<StyleType>;
};

export type RemoteT3DInput = {
  href: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/**
 * #################################################################
 * # Default Filter Operators
 * #################################################################
 */
export type SimpleCriteria = {
  eq?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

/**
 * #################################################################
 * # SimpleTag
 * #################################################################
 */
export type SimpleTagCommandInput = {
  create?: InputMaybe<Array<InputMaybe<SimpleTagCreateInput>>>;
  delete?: InputMaybe<Array<InputMaybe<SimpleTagDeleteInput>>>;
  update?: InputMaybe<Array<InputMaybe<SimpleTagUpdateInput>>>;
};

export type SimpleTagCreateInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type SimpleTagDeleteInput = {
  id: Scalars['ID']['input'];
};

export type SimpleTagUpdateInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SimpleTagValue = {
  __typename?: 'SimpleTagValue';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type SmartTileInput = {
  dataAssetId?: InputMaybe<Scalars['ID']['input']>;
};

export type StringCriteria = {
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  endsWithIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  matches?: InputMaybe<Scalars['String']['input']>;
  max?: InputMaybe<StringCriteria>;
  min?: InputMaybe<StringCriteria>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notBetween?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
  startsWithIgnoreCase?: InputMaybe<Scalars['String']['input']>;
};

export type StyleContextValue = {
  line?: InputMaybe<LineStyleInput>;
  point?: InputMaybe<PointStyleInput>;
  polygon?: InputMaybe<PolygonStyleInput>;
  raster?: InputMaybe<RasterStyleInput>;
};

export type StyleFilter = {
  and?: InputMaybe<Array<StyleFilter>>;
  description?: InputMaybe<StringCriteria>;
  enabled?: InputMaybe<BooleanCriteria>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<StringCriteria>;
  not?: InputMaybe<StyleFilter>;
  or?: InputMaybe<Array<StyleFilter>>;
};

export enum StyleType {
  Line = 'LINE',
  Point = 'POINT',
  Polygon = 'POLYGON',
  Raster = 'RASTER',
  Unknown = 'UNKNOWN'
}

export type T3DInput = {
  dataAssetId?: InputMaybe<Scalars['ID']['input']>;
};

export type TimeCriteria = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  eq?: InputMaybe<Scalars['Time']['input']>;
  ge?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  le?: InputMaybe<Scalars['Time']['input']>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  max?: InputMaybe<TimeCriteria>;
  min?: InputMaybe<TimeCriteria>;
  ne?: InputMaybe<Scalars['Time']['input']>;
  notBetween?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
};

/**
 * ##################################################################################
 * # Update
 * ##################################################################################
 */
export type UpdateAssetInput = {
  access?: InputMaybe<LayerAccess>;
  context?: InputMaybe<PublishContextValue>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  groupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  properties?: InputMaybe<JsonPropertyInput>;
  type?: InputMaybe<LayerAssetType>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateAssetResponse = WithAuditable & WithJsonProperty & {
  __typename?: 'UpdateAssetResponse';
  access?: Maybe<LayerAccess>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  properties?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<LayerAssetStatus>;
  type?: Maybe<LayerAssetType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  visible?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * ##################################################################################
 * # Update
 * ##################################################################################
 */
export type UpdateGroupInput = {
  access?: InputMaybe<LayerAccess>;
  collapsed?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  properties?: InputMaybe<JsonPropertyInput>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateGroupResponse = WithAuditable & {
  __typename?: 'UpdateGroupResponse';
  access: LayerAccess;
  children?: Maybe<Array<Maybe<LayerGroup>>>;
  collapsed: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<LayerGroup>;
  published: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

/**
 * ##################################################################################
 * # Update
 * ##################################################################################
 */
export type UpdateLabelInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLabelResponse = WithAuditable & {
  __typename?: 'UpdateLabelResponse';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/**
 * ##################################################################################
 * # Update
 * ##################################################################################
 */
export type UpdateStyleInput = {
  access?: InputMaybe<LayerAccess>;
  context?: InputMaybe<StyleContextValue>;
  defaultStatus?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<LayerStyleFormat>;
  name?: InputMaybe<Scalars['String']['input']>;
  properties?: InputMaybe<JsonPropertyInput>;
};

export type UpdateStyleResponse = WithAuditable & {
  __typename?: 'UpdateStyleResponse';
  access?: Maybe<LayerAccess>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  defaultStatus?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  format?: Maybe<LayerStyleFormat>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type UserAssetFilterInput = {
  access?: InputMaybe<CommonCriteria>;
  and?: InputMaybe<Array<UserAssetFilterInput>>;
  enabled?: InputMaybe<BooleanCriteria>;
  groupId?: InputMaybe<SimpleCriteria>;
  id?: InputMaybe<SimpleCriteria>;
  name?: InputMaybe<StringCriteria>;
  not?: InputMaybe<UserAssetFilterInput>;
  or?: InputMaybe<Array<UserAssetFilterInput>>;
};

/**
 * ##################################################################################
 * # Query
 * ##################################################################################
 */
export type UserGroupFilterInput = {
  access?: InputMaybe<CommonCriteria>;
  and?: InputMaybe<Array<UserGroupFilterInput>>;
  enabled?: InputMaybe<BooleanCriteria>;
  id?: InputMaybe<SimpleCriteria>;
  name?: InputMaybe<StringCriteria>;
  not?: InputMaybe<UserGroupFilterInput>;
  or?: InputMaybe<Array<UserGroupFilterInput>>;
  parentId?: InputMaybe<SimpleCriteria>;
};

export type UserLayerAsset = WithAuditable & WithJsonProperty & {
  __typename?: 'UserLayerAsset';
  access?: Maybe<LayerAccess>;
  assetId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  logs?: Maybe<Array<Maybe<LayerAssetLog>>>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  properties?: Maybe<Scalars['JSON']['output']>;
  type?: Maybe<LayerAssetType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  visible?: Maybe<Scalars['Boolean']['output']>;
};

export type UserLayerGroup = WithAuditable & {
  __typename?: 'UserLayerGroup';
  access: LayerAccess;
  assets: Array<UserLayerAsset>;
  children: Array<UserLayerGroup>;
  collapsed: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  groupId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<UserLayerGroup>;
  published: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type WithAuditable = {
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type WithJsonProperty = {
  properties?: Maybe<Scalars['JSON']['output']>;
};

export type WithSimpleTags = {
  tags: Array<Maybe<SimpleTagValue>>;
};

export type LayerGroupFieldsFragment = { __typename?: 'LayerGroup', id: string, name?: string | null, description?: string | null, enabled: boolean, createdAt?: string | null, createdBy?: string | null, updatedAt?: string | null, updatedBy?: string | null } & { ' $fragmentName'?: 'LayerGroupFieldsFragment' };

export type LayerAssetFieldsFragment = { __typename?: 'LayerAsset', id: string, name?: string | null, description?: string | null, enabled?: boolean | null, createdAt?: string | null, createdBy?: string | null, updatedAt?: string | null, updatedBy?: string | null } & { ' $fragmentName'?: 'LayerAssetFieldsFragment' };

export type GroupsQueryVariables = Exact<{
  filter?: InputMaybe<GroupFilterInput>;
}>;


export type GroupsQuery = { __typename?: 'Query', groups: Array<(
    { __typename?: 'LayerGroup' }
    & { ' $fragmentRefs'?: { 'LayerGroupFieldsFragment': LayerGroupFieldsFragment } }
  ) | null> };

export type GroupTreeQueryVariables = Exact<{
  filter?: InputMaybe<GroupFilterInput>;
}>;


export type GroupTreeQuery = { __typename?: 'Query', groups: Array<(
    { __typename?: 'LayerGroup', assets: Array<(
      { __typename?: 'LayerAsset' }
      & { ' $fragmentRefs'?: { 'LayerAssetFieldsFragment': LayerAssetFieldsFragment } }
    )>, children: Array<(
      { __typename?: 'LayerGroup', assets: Array<(
        { __typename?: 'LayerAsset' }
        & { ' $fragmentRefs'?: { 'LayerAssetFieldsFragment': LayerAssetFieldsFragment } }
      )>, children: Array<(
        { __typename?: 'LayerGroup', assets: Array<(
          { __typename?: 'LayerAsset' }
          & { ' $fragmentRefs'?: { 'LayerAssetFieldsFragment': LayerAssetFieldsFragment } }
        )> }
        & { ' $fragmentRefs'?: { 'LayerGroupFieldsFragment': LayerGroupFieldsFragment } }
      )> }
      & { ' $fragmentRefs'?: { 'LayerGroupFieldsFragment': LayerGroupFieldsFragment } }
    )> }
    & { ' $fragmentRefs'?: { 'LayerGroupFieldsFragment': LayerGroupFieldsFragment } }
  ) | null> };

export const LayerGroupFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerGroupFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"}}]}}]} as unknown as DocumentNode<LayerGroupFieldsFragment, unknown>;
export const LayerAssetFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerAssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"}}]}}]} as unknown as DocumentNode<LayerAssetFieldsFragment, unknown>;
export const GroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Groups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GroupFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerGroupFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerGroupFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"}}]}}]} as unknown as DocumentNode<GroupsQuery, GroupsQueryVariables>;
export const GroupTreeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GroupTree"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GroupFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerGroupFields"}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerAssetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerGroupFields"}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerAssetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerGroupFields"}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerAssetFields"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerGroupFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerAssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"}}]}}]} as unknown as DocumentNode<GroupTreeQuery, GroupTreeQueryVariables>;
import { Ref } from 'vue';
import { initParent } from './hooks';
export interface Position {
    x: number;
    y: number;
    w: number;
    h: number;
}
export interface PositionStore {
    [propName: string]: Position;
}
export declare type UpdatePosition = (id: string, position: Position) => void;
export declare type GetPositionStore = (excludeId?: string) => PositionStore;
export interface ContainerProvider {
    updatePosition: UpdatePosition;
    getPositionStore: GetPositionStore;
    setMatchedLine: SetMatchedLine;
    disabled: Ref<boolean>;
    adsorbParent: Ref<boolean>;
    adsorbCols: number[];
    adsorbRows: number[];
}
export interface MatchedLine {
    row: number[];
    col: number[];
}
export declare type SetMatchedLine = (matchedLine: MatchedLine | null) => void;
export declare type ResizingHandle = 'tl' | 'tm' | 'tr' | 'ml' | 'mr' | 'bl' | 'bm' | 'br' | '';
export declare type ParentSize = ReturnType<typeof initParent>;
export declare type ReferenceLineMap = Record<'col' | 'row', {
    [propName: number]: Record<'min' | 'max' | 'value', number>;
}>;

import { App } from 'vue';
declare const _default: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            active: boolean;
            x: number;
            y: number;
            initW: number;
            initH: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            minW: number;
            minH: number;
        }> & Pick<Readonly<{
            active: boolean;
            x: number;
            y: number;
            initW: number;
            initH: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            minW: number;
            minH: number;
        } & {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "style" | "key" | "ref" | "class" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted">;
        $attrs: Record<string, unknown>;
        $refs: Record<string, unknown>;
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            active: boolean;
            x: number;
            y: number;
            initW: number;
            initH: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            minW: number;
            minH: number;
        } & {}>, {
            containerRef: import("vue").Ref<HTMLDivElement>;
            width: import("vue").Ref<number>;
            setWidth: (value: number) => void;
            height: import("vue").Ref<number>;
            setHeight: (value: number) => void;
            top: import("vue").Ref<number>;
            setTop: (value: number) => void;
            left: import("vue").Ref<number>;
            setLeft: (value: number) => void;
            enable: import("vue").Ref<boolean>;
            setEnable: (value: boolean) => void;
            dragging: import("vue").Ref<boolean>;
            setDragging: (value: boolean) => void;
            resizing: import("vue").Ref<boolean>;
            setResizing: (value: boolean) => void;
        }, {}, {
            style(): {
                [propName: string]: string;
            };
            klass(): {
                [propName: string]: string | boolean;
            };
        }, {
            unselect(e: Event): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
            active: boolean;
            x: number;
            y: number;
            initW: number;
            initH: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            minW: number;
            minH: number;
        }>;
        $forceUpdate: import("vue").ReactiveEffect<any>;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: TimerHandler, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        active: boolean;
        x: number;
        y: number;
        initW: number;
        initH: number;
        w: number;
        h: number;
        draggable: boolean;
        resizable: boolean;
        minW: number;
        minH: number;
    } & {}> & import("vue").ShallowUnwrapRef<{
        containerRef: import("vue").Ref<HTMLDivElement>;
        width: import("vue").Ref<number>;
        setWidth: (value: number) => void;
        height: import("vue").Ref<number>;
        setHeight: (value: number) => void;
        top: import("vue").Ref<number>;
        setTop: (value: number) => void;
        left: import("vue").Ref<number>;
        setLeft: (value: number) => void;
        enable: import("vue").Ref<boolean>;
        setEnable: (value: boolean) => void;
        dragging: import("vue").Ref<boolean>;
        setDragging: (value: boolean) => void;
        resizing: import("vue").Ref<boolean>;
        setResizing: (value: boolean) => void;
    }> & {
        style: {
            [propName: string]: string;
        };
        klass: {
            [propName: string]: string | boolean;
        };
    } & {
        unselect(e: Event): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    active: boolean;
    x: number;
    y: number;
    initW: number;
    initH: number;
    w: number;
    h: number;
    draggable: boolean;
    resizable: boolean;
    minW: number;
    minH: number;
} & {}>, {
    containerRef: import("vue").Ref<HTMLDivElement>;
    width: import("vue").Ref<number>;
    setWidth: (value: number) => void;
    height: import("vue").Ref<number>;
    setHeight: (value: number) => void;
    top: import("vue").Ref<number>;
    setTop: (value: number) => void;
    left: import("vue").Ref<number>;
    setLeft: (value: number) => void;
    enable: import("vue").Ref<boolean>;
    setEnable: (value: boolean) => void;
    dragging: import("vue").Ref<boolean>;
    setDragging: (value: boolean) => void;
    resizing: import("vue").Ref<boolean>;
    setResizing: (value: boolean) => void;
}, {}, {
    style(): {
        [propName: string]: string;
    };
    klass(): {
        [propName: string]: string | boolean;
    };
}, {
    unselect(e: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
    active: boolean;
    x: number;
    y: number;
    initW: number;
    initH: number;
    w: number;
    h: number;
    draggable: boolean;
    resizable: boolean;
    minW: number;
    minH: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: App<any>, ...options: any[]) => any) & {
    install?: (app: App<any>, ...options: any[]) => any;
}) | ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            active: boolean;
            x: number;
            y: number;
            initW: number;
            initH: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            minW: number;
            minH: number;
        }> & Pick<Readonly<{
            active: boolean;
            x: number;
            y: number;
            initW: number;
            initH: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            minW: number;
            minH: number;
        } & {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "style" | "key" | "ref" | "class" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted">;
        $attrs: Record<string, unknown>;
        $refs: Record<string, unknown>;
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            active: boolean;
            x: number;
            y: number;
            initW: number;
            initH: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            minW: number;
            minH: number;
        } & {}>, {
            containerRef: import("vue").Ref<HTMLDivElement>;
            width: import("vue").Ref<number>;
            setWidth: (value: number) => void;
            height: import("vue").Ref<number>;
            setHeight: (value: number) => void;
            top: import("vue").Ref<number>;
            setTop: (value: number) => void;
            left: import("vue").Ref<number>;
            setLeft: (value: number) => void;
            enable: import("vue").Ref<boolean>;
            setEnable: (value: boolean) => void;
            dragging: import("vue").Ref<boolean>;
            setDragging: (value: boolean) => void;
            resizing: import("vue").Ref<boolean>;
            setResizing: (value: boolean) => void;
        }, {}, {
            style(): {
                [propName: string]: string;
            };
            klass(): {
                [propName: string]: string | boolean;
            };
        }, {
            unselect(e: Event): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
            active: boolean;
            x: number;
            y: number;
            initW: number;
            initH: number;
            w: number;
            h: number;
            draggable: boolean;
            resizable: boolean;
            minW: number;
            minH: number;
        }>;
        $forceUpdate: import("vue").ReactiveEffect<any>;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: TimerHandler, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        active: boolean;
        x: number;
        y: number;
        initW: number;
        initH: number;
        w: number;
        h: number;
        draggable: boolean;
        resizable: boolean;
        minW: number;
        minH: number;
    } & {}> & import("vue").ShallowUnwrapRef<{
        containerRef: import("vue").Ref<HTMLDivElement>;
        width: import("vue").Ref<number>;
        setWidth: (value: number) => void;
        height: import("vue").Ref<number>;
        setHeight: (value: number) => void;
        top: import("vue").Ref<number>;
        setTop: (value: number) => void;
        left: import("vue").Ref<number>;
        setLeft: (value: number) => void;
        enable: import("vue").Ref<boolean>;
        setEnable: (value: boolean) => void;
        dragging: import("vue").Ref<boolean>;
        setDragging: (value: boolean) => void;
        resizing: import("vue").Ref<boolean>;
        setResizing: (value: boolean) => void;
    }> & {
        style: {
            [propName: string]: string;
        };
        klass: {
            [propName: string]: string | boolean;
        };
    } & {
        unselect(e: Event): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    active: boolean;
    x: number;
    y: number;
    initW: number;
    initH: number;
    w: number;
    h: number;
    draggable: boolean;
    resizable: boolean;
    minW: number;
    minH: number;
} & {}>, {
    containerRef: import("vue").Ref<HTMLDivElement>;
    width: import("vue").Ref<number>;
    setWidth: (value: number) => void;
    height: import("vue").Ref<number>;
    setHeight: (value: number) => void;
    top: import("vue").Ref<number>;
    setTop: (value: number) => void;
    left: import("vue").Ref<number>;
    setLeft: (value: number) => void;
    enable: import("vue").Ref<boolean>;
    setEnable: (value: boolean) => void;
    dragging: import("vue").Ref<boolean>;
    setDragging: (value: boolean) => void;
    resizing: import("vue").Ref<boolean>;
    setResizing: (value: boolean) => void;
}, {}, {
    style(): {
        [propName: string]: string;
    };
    klass(): {
        [propName: string]: string | boolean;
    };
}, {
    unselect(e: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
    active: boolean;
    x: number;
    y: number;
    initW: number;
    initH: number;
    w: number;
    h: number;
    draggable: boolean;
    resizable: boolean;
    minW: number;
    minH: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App<any>, ...options: any[]) => any;
});
export default _default;

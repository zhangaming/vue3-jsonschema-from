declare const Radios: import("vue").DefineComponent<{
    title: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
    };
    errors: {
        readonly type: import("vue").PropType<string[]>;
    };
    options: {
        readonly type: import("vue").PropType<import("@v3jsf/core/types").WidgetOptions>;
        readonly required: true;
    };
    id: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
    };
    path: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
    };
    value: {
        readonly required: true;
    };
    schema: {
        readonly type: import("vue").PropType<import("@v3jsf/core/types").Schema>;
        readonly required: true;
    };
    rootSchema: {
        readonly type: import("vue").PropType<import("@v3jsf/core/types").Schema>;
        readonly required: true;
    };
    uiSchema: {
        readonly type: import("vue").PropType<import("@v3jsf/core/types").UISchema>;
        readonly required: true;
    };
    onChange: {
        readonly type: import("vue").PropType<(value: any) => void>;
        readonly required: true;
    };
    required: {
        readonly type: import("vue").PropType<boolean>;
        readonly required: true;
    };
    isDependenciesKey: {
        readonly type: import("vue").PropType<boolean>;
        readonly required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title: string;
    options: import("@v3jsf/core/types").WidgetOptions;
    id: string;
    path: string;
    value: unknown;
    schema: import("@v3jsf/core/types").Schema;
    rootSchema: import("@v3jsf/core/types").Schema;
    uiSchema: import("@v3jsf/core/types").UISchema;
    onChange: (value: any) => void;
    required: boolean;
    isDependenciesKey: boolean;
} & {
    errors?: string[] | undefined;
}>, {}>;
export default Radios;
//# sourceMappingURL=RadioWidget.d.ts.map
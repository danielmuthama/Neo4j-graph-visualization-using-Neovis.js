export const NEOVIS_DEFAULT_CONFIG: unique symbol;

export interface ILabelConfig {
    caption?: string;
    size?: string;
    community?: string;
    sizeCypher?: string;
    image?: string;
}

export interface IRelationshipConfig {
    thickness?: string;
    caption?: boolean | string;
}

export interface INeovisConfig {
    container_id: string;
    server_url: string;
    server_user: string;
    server_password: string;
    labels?: {
        [label: string]: ILabelConfig,
        [NEOVIS_DEFAULT_CONFIG]?: IRelationshipConfig
    };
    relationships?: {
        [relationship: string]: IRelationshipConfig,
        [NEOVIS_DEFAULT_CONFIG]?: IRelationshipConfig
    };
    arrows?: boolean;
    hierarchical?: boolean;
    hierarchical_sort_method?: "hubsize" | "directed";
    initial_cypher?: string;
    console_debug?: boolean;
    encrypted?: "ENCRYPTION_OFF" | "ENCRYPTION_ON";
    trust?: "TRUST_ALL_CERTIFICATES" | "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES";
}

declare class Neovis {
    constructor(config: INeovisConfig);
    render(): void;
    clearNetwork(): void;
    registerOnEvent(eventType: string, handler: (event: any) => void): void;
    reinit(config: INeovisConfig): void;
    reload(): void;
    stabilize(): void;
    renderWithCypher(query: string): void;
    updateWithCypher(query: string): void;

}

export default Neovis;

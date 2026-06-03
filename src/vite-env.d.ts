/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_COMPONENT_PREFIX?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
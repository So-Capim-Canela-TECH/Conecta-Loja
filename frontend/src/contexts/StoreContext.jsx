// Localização: frontend/src/contexts/StoreContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/config'; // Importa sua instância configurada do Axios

// 1. Cria o contexto
const StoreContext = createContext();

// 2. Cria o Provedor do contexto
export const StoreProvider = ({ children }) => {
    const [storeConfig, setStoreConfig] = useState({});
    const [storeInfo, setStoreInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isInfoLoading, setIsInfoLoading] = useState(false);

    useEffect(() => {
        const fetchStoreConfig = async () => {
            try {
                // Busca os dados da rota PÚBLICA (configurações visuais)
                const response = await api.get('/store/public-config');
                setStoreConfig(response.data);
            } catch (error) {
                console.error("Falha ao buscar configurações da loja:", error);
                // Em caso de erro, a aplicação continuará com os valores padrão
            } finally {
                setIsLoading(false);
            }
        };

        fetchStoreConfig();
    }, []); // O array vazio garante que a busca aconteça apenas uma vez

    // Função para buscar informações básicas da loja (requer autenticação)
    const fetchStoreInfo = async () => {
        try {
            setIsInfoLoading(true);
            const token = localStorage.getItem('authToken');

            if (token) {
                // Busca informações básicas da loja (nome, contato, endereço)
                const response = await api.get('/store/info', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (response.data.success) {
                    setStoreInfo(response.data.data);
                }
            }
        } catch (error) {
            console.error("Falha ao buscar informações da loja:", error);
            // Em caso de erro, mantém os valores padrão
        } finally {
            setIsInfoLoading(false);
        }
    };

    const value = {
        storeConfig,
        storeInfo,
        isLoading,
        isInfoLoading,
        fetchStoreInfo
    };

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

// 3. Cria um hook customizado para facilitar o uso do contexto
export const useStore = () => {
    return useContext(StoreContext);
};
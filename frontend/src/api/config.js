import axios from "axios";

/**
 * Configuração base do axios - Conecta-Loja
 *
 * Configuração centralizada para todas as requisições da API.
 * Importe este arquivo em todos os serviços que precisam acessar a API.
 */
// Debug: verificar qual URL está sendo usada
const apiUrl =
  import.meta.env.VITE_API_URL ||
  "https://conecta-loja-backend.onrender.com/api";
console.log("🔧 API URL sendo usada:", apiUrl);
console.log("🔧 VITE_API_URL:", import.meta.env.VITE_API_URL);

const api = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Interceptor para adicionar token JWT automaticamente nas requisições
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Interceptor para tratamento de respostas
 */
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Tratamento específico de erros
    if (error.response) {
      // Erro da API (status code fora do range 2xx)
      const { status, data } = error.response;

      // Debug: log da resposta completa do erro
      console.log("Erro da API:", { status, data });

      switch (status) {
        case 400:
          // Para erros de validação, incluir detalhes específicos
          if (data.details && Array.isArray(data.details)) {
            const errorMessages = data.details
              .map((detail) => `${detail.field}: ${detail.message}`)
              .join(", ");
            throw new Error(`Dados inválidos: ${errorMessages}`);
          }
          throw new Error(data.error || "Dados inválidos");
        case 401:
          // Token expirado ou inválido
          localStorage.removeItem("authToken");
          throw new Error("Sessão expirada. Faça login novamente.");
        case 409:
          throw new Error(data.error || "Conflito de dados");
        case 500:
          throw new Error("Erro interno do servidor");
        default:
          throw new Error(data.error || data.message || "Erro desconhecido");
      }
    } else if (error.request) {
      // Erro de rede
      throw new Error("Erro de conexão. Verifique sua internet.");
    } else {
      // Outro tipo de erro
      throw new Error(error.message || "Erro inesperado");
    }
  }
);

export default api;

import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/ButtonDash';
import Icon from '../../../components/AppIcon';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';

/**
 * BusinessInfoSection - Seção de informações do negócio - Conecta-Loja
 *
 * Componente que gerencia as informações básicas da loja, incluindo nome,
 * contato, email, descrição e endereço. Permite editar e salvar essas informações.
 *
 * Funcionalidades principais:
 * - Edição de informações básicas da loja (nome, contato, email, descrição)
 * - Gerenciamento de endereço da loja
 * - Validação de campos obrigatórios
 * - Salvamento automático das alterações
 * - Feedback visual de sucesso/erro
 *
 * Campos gerenciados:
 * - name: Nome da loja
 * - contact: Contato/telefone
 * - email: Email da loja
 * - description: Descrição da loja
 * - street: Rua/endereço
 * - city: Cidade
 * - state: Estado
 * - zipCode: CEP
 *
 * @component
 * @returns {JSX.Element} Seção de informações do negócio
 */
const BusinessInfoSection = () => {
  // Estado para as informações da loja
  const [storeInfo, setStoreInfo] = useState({
    name: '',
    contact: '',
    email: '',
    description: '',
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });

  // Estados para controle da UI
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  /**
   * Carrega as informações da loja da API
   */
  const loadStoreInfo = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000/api'}/store/info`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStoreInfo(data.data || {
          name: '',
          contact: '',
          email: '',
          description: '',
          street: '',
          city: '',
          state: '',
          zipCode: ''
        });
      } else {
        console.error('Erro ao carregar informações:', data);
        // Dados padrão se não conseguir carregar
        setStoreInfo({
          name: '',
          contact: '',
          email: '',
          description: '',
          street: '',
          city: '',
          state: '',
          zipCode: ''
        });
      }
    } catch (error) {
      console.error('Erro ao carregar informações da loja:', error);
      // Dados padrão em caso de erro
      setStoreInfo({
        name: '',
        contact: '',
        email: '',
        description: '',
        street: '',
        city: '',
        state: '',
        zipCode: ''
      });
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Salva as informações da loja na API
   */
  const saveStoreInfo = async () => {
    try {
      setIsSaving(true);

      console.log('📤 Enviando dados para API:', storeInfo);

      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000/api'}/store/info`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify(storeInfo)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setHasChanges(false);
        alert('Informações da loja salvas com sucesso!');
      } else {
        console.error('Erro ao salvar informações:', data);
        alert(data.error || 'Erro ao salvar informações da loja. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao salvar informações da loja:', error);
      alert('Erro ao salvar informações da loja. Tente novamente.');
    } finally {
      setIsSaving(false);
    }
  };

  /**
   * Manipula mudanças nos campos do formulário
   * @param {string} field - Nome do campo
   * @param {string} value - Valor do campo
   */
  const handleFieldChange = (field, value) => {
    setStoreInfo(prev => ({
      ...prev,
      [field]: value
    }));
    setHasChanges(true);
  };

  // Carrega dados ao montar o componente
  useEffect(() => {
    loadStoreInfo();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Icon name="Loader2" className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-muted-foreground">Carregando informações...</span>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header da Seção */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Informações do Negócio</h2>
          <p className="text-muted-foreground mt-1">
            Gerencie as informações básicas da sua loja
          </p>
        </div>
        {hasChanges && (
          <Button
            onClick={saveStoreInfo}
            disabled={isSaving}
            className="flex items-center gap-2"
          >
            {isSaving ? (
              <Icon name="Loader2" className="h-4 w-4 animate-spin" />
            ) : (
              <Icon name="Save" className="h-4 w-4" />
            )}
            {isSaving ? 'Salvando...' : 'Salvar Alterações'}
          </Button>
        )}
      </div>

      {/* Informações Básicas */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Icon name="Building2" className="h-5 w-5 text-primary" />
          Dados da Loja
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nome da Loja */}
          <div className="space-y-2">
            <Label htmlFor="name">Nome da Loja *</Label>
            <Input
              id="name"
              type="text"
              value={storeInfo.name}
              onChange={(e) => handleFieldChange('name', e.target.value)}
              placeholder="Digite o nome da sua loja"
              required
            />
          </div>

          {/* Contato */}
          <div className="space-y-2">
            <Label htmlFor="contact">Contato</Label>
            <Input
              id="contact"
              type="text"
              value={storeInfo.contact}
              onChange={(e) => handleFieldChange('contact', e.target.value)}
              placeholder="(11) 99999-1234"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={storeInfo.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              placeholder="contato@sualoja.com.br"
              required
            />
          </div>

          {/* Espaço vazio para alinhamento */}
          <div></div>

          {/* Descrição */}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description">Descrição da Loja</Label>
            <Textarea
              id="description"
              value={storeInfo.description}
              onChange={(e) => handleFieldChange('description', e.target.value)}
              placeholder="Descreva brevemente sua loja..."
              rows={3}
            />
          </div>
        </div>
      </div>

      {/* Endereço da Loja */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Icon name="MapPin" className="h-5 w-5 text-primary" />
          Endereço da Loja
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Rua/Endereço */}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="street">Endereço</Label>
            <Input
              id="street"
              type="text"
              value={storeInfo.street}
              onChange={(e) => handleFieldChange('street', e.target.value)}
              placeholder="Rua, número, complemento"
            />
          </div>

          {/* Cidade */}
          <div className="space-y-2">
            <Label htmlFor="city">Cidade</Label>
            <Input
              id="city"
              type="text"
              value={storeInfo.city}
              onChange={(e) => handleFieldChange('city', e.target.value)}
              placeholder="São Paulo"
            />
          </div>

          {/* Estado */}
          <div className="space-y-2">
            <Label htmlFor="state">Estado</Label>
            <Input
              id="state"
              type="text"
              value={storeInfo.state}
              onChange={(e) => handleFieldChange('state', e.target.value)}
              placeholder="SP"
              maxLength={2}
            />
          </div>

          {/* CEP */}
          <div className="space-y-2">
            <Label htmlFor="zipCode">CEP</Label>
            <Input
              id="zipCode"
              type="text"
              value={storeInfo.zipCode}
              onChange={(e) => handleFieldChange('zipCode', e.target.value)}
              placeholder="01234-567"
            />
          </div>
        </div>
      </div>

      {/* Informações Adicionais */}
      <div className="bg-muted/30 border border-border rounded-lg p-6">
        <div className="flex items-start gap-3">
          <Icon name="Info" className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-1">Informações Importantes</p>
            <ul className="space-y-1 text-xs">
              <li>• Os campos marcados com * são obrigatórios</li>
              <li>• As alterações são salvas automaticamente quando você clica em "Salvar Alterações"</li>
              <li>• O endereço é usado para cálculos de frete e localização da loja</li>
              <li>• O email será usado para comunicações oficiais da plataforma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoSection;
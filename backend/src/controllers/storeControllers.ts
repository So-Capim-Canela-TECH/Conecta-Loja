// Localização: backend/src/controllers/storeControllers.ts

import { Request, Response } from 'express';
import { StoreService } from '../services/storeService';

/**
 * Lista os funcionários de uma loja
 */
export const listEmployees = async (req: Request, res: Response) => {
    try {
        const lojaId = Number(req.params.lojaId);
        if (isNaN(lojaId)) {
            return res.status(400).json({ error: "ID inválido" });
        }
        const employees = await StoreService.listEmployees(lojaId);
        return res.status(200).json(employees);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao buscar funcionários" });
    }
};

/**
 * Controller para deletar um funcionário
 */
export const deleteEmployee = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }
        await StoreService.deleteEmployee(id);
        return res.status(200).json({ message: "Funcionário deletado com sucesso" });
    } catch (error: any) {
        console.error(error);
        if (error.message === "Funcionário não encontrado") {
            return res.status(404).json({ error: error.message });
        }
        return res.status(500).json({ error: "Erro ao deletar funcionário" });
    }
};

/**
 * Controller: Busca as configurações da loja.
 */
export const getStoreConfig = async (req: Request, res: Response) => {
    try {
        const config = await StoreService.getConfig();
        return res.status(200).json(config);
    } catch (error: any) {
        if (error.message === "Configurações da loja não encontradas.") {
            return res.status(404).json({ error: error.message });
        }
        return res.status(500).json({ error: "Erro interno ao buscar configurações." });
    }
};

/**
 * Controller: Atualiza as configurações da loja.
 */
export const updateStoreConfig = async (req: Request, res: Response) => {
    try {
        const files = req.files as { [fieldname: string]: Express.Multer.File[] };
        const dataToUpdate = {...req.body};

        if (files?.logo?.[0]) {
            dataToUpdate.logoUrl = `/uploads/${files.logo[0].filename}`;
        }
        if (files?.bannerImage?.[0]) {
            dataToUpdate.bannerImageUrl = `/uploads/${files.bannerImage[0].filename}`;
        }

        const updatedConfig = await StoreService.updateConfig(dataToUpdate);
        return res.status(200).json(updatedConfig);
    } catch (error) {
        console.error("Erro ao atualizar configurações:", error);
        return res.status(500).json({error: "Erro interno ao atualizar configurações."});
    }
};

/**
 * Controller: Busca as informações básicas da loja.
 */
export const getStoreInfo = async (req: Request, res: Response) => {
    try {
        const storeInfo = await StoreService.getStoreInfo();
        return res.status(200).json({
            success: true,
            data: storeInfo
        });
    } catch (error: any) {
        console.error("Erro ao buscar informações da loja:", error);
        return res.status(500).json({
            success: false,
            error: "Erro interno ao buscar informações da loja."
        });
    }
};

/**
 * Controller: Atualiza as informações básicas da loja.
 */
export const updateStoreInfo = async (req: Request, res: Response) => {
    try {
        const { name, contact, email, description, street, city, state, zipCode } = req.body;
        console.log('📥 Recebendo dados da loja:', { name, contact, email, description, street, city, state, zipCode });

        const updatedInfo = await StoreService.updateStoreInfo({
            name,
            contact,
            email,
            description,
            street,
            city,
            state,
            zipCode
        });

        return res.status(200).json({
            success: true,
            message: "Informações da loja atualizadas com sucesso.",
            data: updatedInfo
        });
    } catch (error: any) {
        console.error("Erro ao atualizar informações da loja:", error);
        return res.status(500).json({
            success: false,
            error: "Erro interno ao atualizar informações da loja."
        });
    }
};
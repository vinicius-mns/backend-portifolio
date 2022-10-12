import { Request, Response } from "express";
import BaseService from "./BaseService";

class BaseController {
  protected service: BaseService

  constructor(service: BaseService) {
    this.service = service
  }

  create = async (req: Request, res: Response) => {
    try {
      const body = req.body
      const created = await this.service.create(body)
      return res.status(201).json(created)
    } catch (error) { return res.status(500).json(error) }
  }

  readAll = async (_req: Request, res: Response) => {
    try {
      const all = await this.service.readAll()
      return res.status(200).json(all)
    } catch (error) { return res.status(500).json(error) }
  }

  readOne = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const one = await this.service.readOne(id)
      console.log(one)
      return res.status(200).json(one)
    } catch (error) {
      return res.status(404).json({message: "not found"})
    }
  }

  updateById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params; const body = req.body
      const updated = await this.service.updateById(id, body)
      return res.status(200).json(updated)
    } catch (error) { return res.status(404).json({message: 'Not found'}) }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const deleted = await this.service.deleteById(id)
      return res.status(202).json(deleted)
    } catch (error) { return res.status(404).json({message: 'Not found'}) }
  }
}

export default BaseController

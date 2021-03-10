import { Request, Response } from 'express'

import catchAsync from '@Server/helpers/catchAsync'
import { readJSON } from '@Server/helpers/JSONTool'
import {
  articlePath,
  careerPath,
  educationPath,
  etcPath,
  metaPath,
  profilePath,
  projectPath,
  skillPath,
  systemPath,
} from '@Server/paths'

import systemService from './service'

const Controller = {
  getSystem: catchAsync(async (_: Request, res: Response) => {
    const system = await systemService.getSystem()
    res.json(system)
  }),
  updateEnable: catchAsync(async (req: Request, res: Response) => {
    await systemService.updateEnable(req.body)
    res.status(200).end()
  }),
  updateSort: catchAsync(async (req: Request, res: Response) => {
    await systemService.updateSort(req.body)
    res.status(200).end()
  }),
  deploy: catchAsync(async (_: Request, res: Response) => {
    const homepage = await systemService.deploy()
    res.json({ homepage })
  }),

  getDB: catchAsync(async (_: Request, res: Response) => {
    const article = await readJSON(articlePath)
    const career = await readJSON(careerPath)
    const education = await readJSON(educationPath)
    const etc = await readJSON(etcPath)
    const profile = await readJSON(profilePath)
    const project = await readJSON(projectPath)
    const skill = await readJSON(skillPath)
    const meta = await readJSON(metaPath)
    const system = await readJSON(systemPath)

    res.json({ article, career, education, etc, profile, project, skill, meta, system })
  }),
}

export default Controller

import { Router } from 'express';

import TournamentController from './controller/TournamentController';

const tournament = new TournamentController();

const router = Router();

router.get('/', tournament.getTournaments);

export default router;

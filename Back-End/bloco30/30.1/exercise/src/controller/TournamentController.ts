import { Request, Response } from 'express';
import TournamentService from '../service/TournamentService';

class TournamnetController {
  constructor(private tournamnetService = new TournamentService()) {}

  serverError = 'Internal Server Error';

  notFoundError = 'Not found any world cup with this field';

  public getTournaments = async (
    _req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const tournaments = await this.tournamnetService.getTournaments();
      return res.status(200).json(tournaments);
    } catch (error) {
      return res.status(500).json({ error: this.serverError });
    }
  };
}

export default TournamnetController;

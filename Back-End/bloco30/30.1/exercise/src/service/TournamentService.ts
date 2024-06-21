import { ITournament } from '../schema/tournamentSchema';
import TournamentModel from '../model/TournamentModel';

class TournamentService {
  constructor(private tournamentModel = new TournamentModel()) {}

  public async getTournaments(): Promise<ITournament[] | undefined> {
    const tournaments = await this.tournamentModel.getAll();
    return tournaments;
  }
}

export default TournamentService;

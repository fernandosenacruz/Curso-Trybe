import mongoose from 'mongoose';
import tournamentschema, { ITournament } from '../schema/tournamentSchema';

export default class TournamentModel {
  constructor(
    private model = mongoose.model('tournaments', tournamentschema)
  ) {}

  async create(
    tournament: ITournament
  ): Promise<ITournament & { _id: mongoose.Types.ObjectId }> {
    const created = await this.model.create(tournament);

    return created;
  }

  async getAll(): Promise<ITournament[]> {
    return this.model.find();
  }

  async getById(
    id: string,
    tournamentData: Partial<ITournament>
  ): Promise<void> {
    await this.model.updateOne({ id }, tournamentData);
  }

  async delete(id: string): Promise<void> {
    await this.model.deleteOne({ id });
  }
}

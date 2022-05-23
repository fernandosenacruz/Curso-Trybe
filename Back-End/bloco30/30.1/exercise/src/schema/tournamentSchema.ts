import { Schema } from 'mongoose';

export interface ITournament extends Document {
  year: number;
  hostCountry: string;
  champions: string;
  runnerUp: string;
  editionGoals: number;
  editionStrikers: string[];
  bestPlayer?: string;
  bestGoalkeeper?: string;
  bestYoungPlayer?: string;
}

const Tournamentschema = new Schema<ITournament>(
  {
    year: { type: Number, required: true },
    hostCountry: { type: String, required: true },
    champions: { type: String, required: true },
    runnerUp: { type: String, required: true },
    editionGoals: { type: Number, required: true },
    editionStrikers: { type: [String], required: true },
    bestPlayer: String,
    bestGoalkeeper: String,
    bestYoungPlayer: String,
  },
  { versionKey: false }
);

export default Tournamentschema;

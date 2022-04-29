import mongoose from 'mongoose';
// import Objective from "./objectiveSchema.js"


const Task = mongoose.Schema({
  Title: {
    type: String,
    require: true,
  },
  Action_Time: {
    type: Date,
    require: true,
  },
  // Objective_List: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: Objective,
  // }],
});

export default mongoose.model('Task', Task)
// export default mongoose.model('Objective', Objective);

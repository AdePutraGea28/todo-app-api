import Task from '../models/task.js';

export const getAllData = async (req, res) => {
  const queryData = req.query;
  try {
    const data = await Task.find();
    res.status(200).json(data);
    // console.log(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getDataById = async (req, res) => {
  const getId = req.param;
  try {
    const data = await Task.findById(getId);
    res.status(200).json(data);
    console.log(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// create or post new data
export const addData = async (req, res) => {
  const data = new Task(req.body);
  console.log(data);
  try {
    const saveData = await data.save();
    res.status(201).json(saveData).send(saveData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateData = (req, res) => {
  const getId = req.body;
};

/* eslint-disable no-console */
/* eslint-disable camelcase */
const express = require('express');
const { Sequelize } = require('sequelize');
const { Task } = require('../db/models');

const router = express.Router();

router.route('/')
  .post(async (req, res) => {
  // console.log(req.body);
    const { title, body, checked } = req.body;
    const user_id = req.session.user.id;
    const newTask = await Task.create({
      title, body, user_id, checked,
    });
    res.json(newTask);
  });

// for checked
router.route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const tasks = await Task.findAll({
      where: { user_id: id },
      order: [
        ['id', 'ASC']],
    });
    res.json(tasks);
  })
  .patch(async (req, res) => {
  // const { checked } = req.body;
    const { id } = req.params;
    const updatedTask = await Task.update({ checked: Sequelize.literal('NOT checked') }, { where: { id } });
    res.json(updatedTask[1]);
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      await Task.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

router.route('/:id/edit')
  .patch(async (req, res) => {
    // console.log(req.body);
    const { title, body } = req.body;
    const { id } = req.params;
    const updatedTask = await Task.update(
      { title, body },
      { where: { id }, returning: true, plain: true },
    );
    res.json(updatedTask[1]);
  });

module.exports = router;

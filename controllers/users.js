const express = require('express');

/**
 * METHOD URL         ACTION
 * GET    users/{id}  index
 * POST   users/      create  (add body parameters)
 * PUT    users/      replace (add body parameters)
 * PATCH  users/      update  (add body parameters)
 * DELETE users/{id}  destroy (add body parameters)
 */

function sum(req, res, next) {
  const n1 = parseInt(req.params.n1);
  const n2 = parseInt(req.params.n2);
  const sum = n1 + n2;

  res.send(`Sum ${n1} + ${n2} = ${sum}`);
}

function multiply(req, res, next) {
  const n1 = parseInt(req.body.n1);
  const n2 = parseInt(req.body.n2);
  const multi = n1 * n2;
  res.send(`Multiply ${n1} * ${n2} = ${multi}`);
}

function divide(req, res, next) {
  const n1 = parseInt(req.body.n1);
  const n2 = parseInt(req.body.n2);
  const divide = n1 / n2;

  res.send(`Divide ${n1} / ${n2} = ${divide}`);
}

function power(req, res, next) {
  const n1 = parseInt(req.body.n1);
  const n2 = parseInt(req.body.n2);
  const power = Math.pow(n1, n2);

  res.send(`Power of ${n1} ^ ${n2} = ${power}`);
}

function minus(req, res, next) {
  const n1 = parseInt(req.params.n1);
  const n2 = parseInt(req.params.n2);
  const minus = n1 - n2;

  res.send(`Minus ${n1} - ${n2} = ${minus}`);
}

module.exports = { sum, multiply, divide, power, minus };

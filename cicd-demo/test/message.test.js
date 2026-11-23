import test from 'node:test';
import assert from 'node:assert/strict';
import { greeting } from '../src/message.js';

test('greets a named visitor', () => {
  assert.equal(greeting('Mike'), 'Hello, Mike!');
});

test('removes extra spaces around a name', () => {
  assert.equal(greeting('  Mike  '), 'Hello, Mike!');
});

test('uses a friendly default for an empty name', () => {
  assert.equal(greeting(''), 'Hello, learner!');
  assert.equal(greeting('   '), 'Hello, learner!');
});

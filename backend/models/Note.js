const mongoose = require("mongoose");

/**
 * Схема для нотатки в базі даних.
 * 
 * @typedef {Object} Note
 * @property {string} title - Заголовок нотатки.
 * @property {string} content - Вміст нотатки.
 * @property {Date} createdAt - Дата створення нотатки.
 */
const NoteSchema = new mongoose.Schema({
  /**
   * Заголовок нотатки.
   * @type {string}
   * @required
   */
  title: { type: String, required: true },

  /**
   * Вміст нотатки.
   * @type {string}
   * @required
   */
  content: { type: String, required: true },

  /**
   * Дата створення нотатки.
   * Якщо не вказана, буде встановлено поточну дату.
   * @type {Date}
   * @default Date.now
   */
  createdAt: { type: Date, default: Date.now },
});

// Експортуємо модель для використання в інших частинах програми.
module.exports = mongoose.model("Note", NoteSchema);

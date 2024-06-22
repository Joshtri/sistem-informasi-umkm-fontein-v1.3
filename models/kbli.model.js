import mongoose from 'mongoose';

const kbliSchema = new mongoose.Schema({

  nomor_kbli: {
    type: Number,
    maxlength: 50,
    required: true
  },
  keterangan: {
    type: String,
    maxlength: 240,
    required: true
  },
}, {
  timestamps: true
});

const Kbli = mongoose.model('Kbli', kbliSchema);

export default Kbli;
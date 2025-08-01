const PORT = process.env.PORT || 3000;
mongoose.connect("mongodb+srv://NskAbdul:NskAbdul786@cluster0.dsloo1h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

import Product from "./models/Product.js";

export async function addNewProduct(req, res) {
  const { name, price, description, expirationDate, amount } = req.body;
  if (!name || !price) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const product = new Product({
      name,
      price,
      description,
      expirationDate,
      amount,
    });
    await product.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getProducts(req, res) {
  try {
    const products = await Product.find({}, { __v: 0 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function getProduct(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, price, description, expirationDate, amount } = req.body;
  if (!name && !price) {
    return res.status(400).json({ message: "Price and name are required" });
  }
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.expirationDate = expirationDate || product.expirationDate;
    product.amount = amount || product.amount;
    await product.save();
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

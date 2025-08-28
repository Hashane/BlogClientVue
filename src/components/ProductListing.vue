<script setup>
import { ref } from "vue"

// Products with variants
const products = ref([
  {
    id: 1,
    name: "Laptop",
    price: 99.99,
    count: 100,
    onSale: false,
    variants: [
      { id: 1, color: "Black", image: "/images/laptop-black.png" },
      { id: 2, color: "Silver", image: "/images/laptop-silver.png" },
      { id: 3, color: "White", image: "/images/laptop-white.jpg" }
    ]
  },
  {
    id: 2,
    name: "Makeup",
    price: 149.99,
    count: 10,
    onSale: false,
    variants: [
      { id: 1, color: "Red", image: "/images/makeup-red.jpg" },
      { id: 2, color: "Pink", image: "/images/makeup-pink.jpg" },
      { id: 3, color: "Nude", image: "/images/makeup-nude.jpg" }
    ]
  },
  {
    id: 3,
    name: "Coke Can",
    price: 59.99,
    count: 20,
    onSale: true,
    variants: [
      { id: 1, color: "Classic", image: "/images/coke-classic.jpg" },
      { id: 2, color: "Cherry", image: "/images/coke-cherry.jpg" },
      { id: 3, color: "Vanilla", image: "/images/coke-vanilla.jpg" }
    ]
  },
  {
    id: 4,
    name: "Camera",
    price: 120.0,
    count: 0,
    onSale: false,
    variants: [
      { id: 1, color: "Black", image: "/images/camera-black.jpg" },
      { id: 2, color: "Silver", image: "/images/camera-silver.jpg" }
    ]
  }
])

// Initialize selectedVariant for each product
products.value.forEach(product => {
  product.selectedVariant = product.variants[0]
})

// Cart logic
const cart = ref([])
const addToCart = (id) => {
  if (!cart.value.includes(id)) {
    cart.value.push(id)
  }
}

// Update image on hover
const updateImage = (product, variant) => {
  product.selectedVariant = variant
}
</script>

<template>
  <section>
    <h2 class="subtitle">Available Products</h2>
    <div class="grid">
      <div class="cart">Cart({{ cart.length }})</div>

      <div v-for="product in products" :key="product.id" class="card">
        <p v-if="product.onSale">On Sale</p>

        <!-- Display selected variant image -->
        <img
            :src="product.selectedVariant.image"
            :alt="product.name"
            class="product-img"
        />

        <!-- Color variant circles -->
        <div class="variant-labels">
          <span
              v-for="variant in product.variants"
              :key="variant.id"
              class="color-circle"
              :style="{ backgroundColor: variant.color.toLowerCase() }"
              @mouseover="updateImage(product, variant)"
              :title="variant.color"
          ></span>
        </div>

        <h3>{{ product.name }}</h3>
        <p class="price">${{ product.price.toFixed(2) }}</p>

        <!-- Cart buttons -->
        <button v-if="product.count > 0" class="btn" @click="addToCart(product.id)">Add to Cart</button>
        <button v-else-if="product.count <= 20 && product.count > 0" class="btn">Almost sold out</button>
        <button v-else class="btn">Out of stock</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.subtitle {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.card {
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.price {
  font-weight: bold;
  margin: 0.5rem 0;
}

.btn {
  background: #42b883;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn:hover {
  background: #2a8f6a;
}

.variant-labels {
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0;
  justify-content: center;
}

.color-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  border: 1px solid #ccc;
  transition: transform 0.2s;
}

.color-circle:hover {
  transform: scale(1.2);
  border-color: #333;
}

.cart {
  grid-column: span 2;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>

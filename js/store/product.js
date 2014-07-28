//----------------------------------------------------------------
// product class
function product(sku, name, description, price, cal, pro, carb, fat, quantity, isFav) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.name = name;
    this.description = description;
    this.price = price;
    this.Calorie = cal;
    this.Protein = pro;
    this.Carb = carb;
    this.Fat = fat;
    this.quantity = quantity;
    this.isFav = isFav;
}

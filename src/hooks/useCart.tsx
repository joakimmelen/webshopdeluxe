const handleAddToCart = (clickedItem: CartItemType) => {
    setCart(prev => {
      const isItemInCart = prev.items.find(item => item.id === clickedItem.id);
      
      if (isItemInCart) {
        return {
          ...prev,
          items: prev.items.map(item => item.id === clickedItem.id
                      ? { ...item, quantity: item.quantity + 1 } 
                      : item)
        }
      }
    
      const newCart = { ...prev, items: [...prev.items, { ...clickedItem, quantity: 1 }]}

      window.localStorage.setItem("cart", JSON.stringify(newCart))
      return newCart
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(prev => ({
      ...prev,
      items: prev.items.reduce((ack, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    
    }))
  };
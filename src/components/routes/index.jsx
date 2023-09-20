import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

export default function CustomRoutes() {
  return (
    <AuthLayout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path={`${basePath}/`} element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/whishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </AuthLayout>
  );
}

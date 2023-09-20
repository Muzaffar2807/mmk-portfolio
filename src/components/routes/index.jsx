import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

export default function CustomRoutes() {
  return (
    <AuthLayout>
      <Routes>
        <Route path="/home" element={<Home />} /> 
      </Routes>
    </AuthLayout>
  );
}

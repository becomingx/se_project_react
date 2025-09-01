 import { defineConfig } from "vite";
 import react from "@vitejs/plugin-react";
 
 export default defineConfig({

   plugins: [react()],
   base: "/se_project_react_new/",
   server: {
     port: 3000,
   },
 });

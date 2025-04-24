
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download } from "lucide-react";
import QRCode from "react-qr-code";

function App() {
  const linktreeUrl = "https://linktr.ee/iasdlm.dc";
  const currentUrl = window.location.href;

  const handleClick = () => {
    window.open(linktreeUrl, "_blank");
  };

  const isInstallable = () => {
    return window.matchMedia('(display-mode: browser)').matches && 'serviceWorker' in navigator;
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-effect rounded-xl p-8 text-center max-w-md w-full"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <img  alt="Logo IASD" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white/20" src="https://images.unsplash.com/photo-1589918720175-05b8927f44a9" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-white mb-4"
        >
          IASD Links
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/80 mb-8"
        >
          Escaneie o QR Code abaixo para instalar o app ou clique no botão para acessar
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-4 rounded-lg mb-8 mx-auto w-fit"
        >
          <QRCode value={currentUrl} size={200} />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="space-y-4"
        >
          <Button
            onClick={handleClick}
            className="w-full bg-white text-black hover:bg-white/90 font-semibold py-6 flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            Acessar Links
          </Button>

          {isInstallable() && (
            <Button
              onClick={() => {}}
              className="w-full bg-blue-500 text-white hover:bg-blue-600 font-semibold py-6 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Instalar App
            </Button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;

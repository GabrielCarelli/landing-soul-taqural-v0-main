import { useState } from "react";

// Header
import Header from "../components/landing/Header";

// Modais
import { GalleryModal } from "../components/GalleryModal";

// Seções
import HeroSection from "@/components/landing/HeroSection";
import Gallery from "@/components/landing/Gallery";
import Decorated from "@/components/landing/Decorated";
import Diferentials from "@/components/landing/Diferentials";
import FloorPlan from "@/components/landing/FloorPlan";
import Amenities from "@/components/landing/Amenities";
import Location from "@/components/landing/Location";
import Financing from "@/components/landing/Financing";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import FloatingChat from "@/components/landing/FloatingChat";

// ===== Constantes (galeria) =====
const GALLERY_IMAGES: string[] = [
  "https://api.builder.io/api/v1/image/assets/TEMP/3fae655761c71946c78368423bc7d646e6e66e95?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/f305a2d2bbddf2a21d3c5bdadff06d26e45eeec2?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/b8ce951cc0557707b77c4383287ca6b3472afa28?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/647c10c0c7cad1d16929cdb854b6edecd62f166e?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/fffa0217b6f12d1a913152618da50d90dd2501e0?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/1796dbf2e934ea92e5d3b3c2c3ea985f6651611d?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/9282e47cbe88e05268656314b356582171960f30?width=580",
  "https://api.builder.io/api/v1/image/assets/TEMP/93bd4d096b44f0fba2ef98af0fbc07a1718afc7d?width=580",
];

// ===== Hooks dos modais =====
const useGalleryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (imageIndex = 0) => {
    setCurrentImageIndex(imageIndex);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);
  const navigateToImage = (index: number) => setCurrentImageIndex(index);

  return { isOpen, currentImageIndex, openModal, closeModal, navigateToImage };
};

const useFloorPlanModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return { isOpen, openModal, closeModal };
};

// ===== Bloco das seções principais =====
const LandingSections = () => (
  <main className="w-full">
    {/* Dica: seções internas devem usar containers/padding próprios */}
    <HeroSection />
    <Gallery />
    <Decorated />
    <Diferentials />
    <FloorPlan />
    <Amenities />
    <Location />
    <Financing />
    <Contact />
  </main>
);

// ===== Bloco dos modais =====
interface ModalsProps {
  galleryModal: {
    isOpen: boolean;
    currentImageIndex: number;
    closeModal: () => void;
    navigateToImage: (index: number) => void;
  };
  // Mantemos o floorPlanModal pra compatibilidade futura;
  // prefixo "_" evita warnings de variável não usada:
  floorPlanModal: {
    isOpen: boolean;
    closeModal: () => void;
  };
}

const Modals = ({ galleryModal, floorPlanModal: _floorPlanModal }: ModalsProps) => (
  <>
    <GalleryModal
      images={GALLERY_IMAGES}
      currentIndex={galleryModal.currentImageIndex}
      isOpen={galleryModal.isOpen}
      onClose={galleryModal.closeModal}
      onNavigate={galleryModal.navigateToImage}
    />
    {/* Caso você tenha um modal de plantas, inclua aqui:
        <FloorPlanModal
          isOpen={_floorPlanModal.isOpen}
          onClose={_floorPlanModal.closeModal}
        />
    */}
  </>
);

// ===== Página =====
export default function Index() {
  const galleryModal = useGalleryModal();
  const floorPlanModal = useFloorPlanModal();

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Container global responsivo — substitui a antiga max-content-wrapper */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <Header />
        <LandingSections />
        <Footer />
      </div>

      {/* Elementos flutuantes que geralmente ficam fora do fluxo visual */}
      <FloatingChat />

      {/* Modais no fim da árvore para evitar issues de z-index/stacking */}
      <Modals galleryModal={galleryModal} floorPlanModal={floorPlanModal} />
    </div>
  );
}

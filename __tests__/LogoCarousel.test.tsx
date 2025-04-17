import React from "react";
import { render, screen } from "@testing-library/react";
import LogoCarousel from "@/components/LogoCarousel";
import "@testing-library/jest-dom";
// Mock clients data for testing
const mockClients = [
  {
    id: 1,
    name: "Test Client 1",
    logo: "/images/test-logo-1.png",
  },
  {
    id: 2,
    name: "Test Client 2",
    logo: "/images/test-logo-2.png",
  },
  {
    id: 3,
    name: "Test Client 3",
    logo: "/images/test-logo-3.png",
  },
];

// Mock IntersectionObserver for framer-motion's useInView
class MockIntersectionObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

global.IntersectionObserver = MockIntersectionObserver as any;

// Mock requestAnimationFrame and cancelAnimationFrame
global.requestAnimationFrame = (callback) => setTimeout(callback, 0);
global.cancelAnimationFrame = (id) => clearTimeout(id);

describe("LogoCarousel Component", () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it("renders the carousel with client logos", () => {
    render(<LogoCarousel clients={mockClients} />);

    // Check if all client logos are rendered (duplicated for seamless loop)
    const expectedLogoCount = mockClients.length * 2; // Duplicated for seamless loop
    const logoContainers = screen.getAllByRole("img");
    expect(logoContainers).toHaveLength(expectedLogoCount);

    // Verify alt text for accessibility
    mockClients.forEach((client) => {
      const logoInstances = screen.getAllByAltText(client.name);
      expect(logoInstances.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("applies lazy loading to images", () => {
    render(<LogoCarousel clients={mockClients} />);

    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("loading", "lazy");
    });
  });

  it("applies responsive sizing to images", () => {
    render(<LogoCarousel clients={mockClients} />);

    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("sizes", "(max-width: 768px) 100px, 150px");
    });
  });

  it("renders with custom speed prop", () => {
    const customSpeed = 50;
    render(<LogoCarousel clients={mockClients} speed={customSpeed} />);

    // Component should render without errors with custom speed
    expect(screen.getAllByRole("img").length).toBe(mockClients.length * 2);
  });

  it("renders with custom className prop", () => {
    const customClass = "test-custom-class";
    const { container } = render(
      <LogoCarousel clients={mockClients} className={customClass} />
    );

    // Check if the custom class is applied to the container
    expect(container.firstChild).toHaveClass(customClass);
  });
});

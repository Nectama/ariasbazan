
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

import './Galeria.css';
import Navmenu from './Navmenu';

function Galeria() {

  const galleryImages = [];
  for (let i = 1; i <= 100; i++) {
    galleryImages.push({ id: i, src: `./resources/gallery/${i}.jpg`, width: 1160, height: 1548 });
  }

  const renderRows = () => {
    const rows = [];
    for (let j = 0; j < galleryImages.length; j += 3) {
      rows.push(
        // Full-height image
        <div className="full-height" key={`full-${galleryImages[j].id}`}>
          <Item
            id={galleryImages[j].id}
            original={galleryImages[j].src}
            thumbnail={galleryImages[j].src}
            width={galleryImages[j].width}
            height={galleryImages[j].height}
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src={galleryImages[j].src}
                alt=""
              />
            )}
          </Item>
        </div>
      );

      // Stacked-half images
      rows.push(
        <div className="stacked-half" key={`stack-${j}`}>
          {j + 1 < galleryImages.length && (
            <Item
              id={galleryImages[j + 1].id}
              original={galleryImages[j + 1].src}
              thumbnail={galleryImages[j + 1].src}
              width={galleryImages[j + 1].width}
              height={galleryImages[j + 1].height}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={galleryImages[j + 1].src}
                  alt=""
                />
              )}
            </Item>
          )}
          {j + 2 < galleryImages.length && (
            <Item
              id={galleryImages[j + 2].id}
              original={galleryImages[j + 2].src}
              thumbnail={galleryImages[j + 2].src}
              width={galleryImages[j + 2].width}
              height={galleryImages[j + 2].height}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={galleryImages[j + 2].src}
                  alt=""
                />
              )}
            </Item>
          )}
        </div>
      );
    }
    return rows;
  };

  return (
    <>
      <Navmenu />
      <Gallery>
        <div className="galleryGrid">{renderRows()}</div>
      </Gallery>
    </>
  );
}

export default Galeria;
function GalleryItem({items}) {
  return (
    <>
      <div key={items}>
        <img src="images/goat_small.jpg" />
      </div>
    </>
  );
}

export default GalleryItem;

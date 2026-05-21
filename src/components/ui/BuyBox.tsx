'use client';

import { useState } from 'react';

// ─── Token / Brand colors ────────────────────────────────────────────────────
const C = {
  gapBlue:      '#031ba1',
  red:          '#e10000',
  grayText:     '#757575',
  grayDark:     '#595959',
  borderGray:   '#cccccc',
  black:        '#000000',
  white:        '#ffffff',
};

// ─── Data ────────────────────────────────────────────────────────────────────
const PRODUCT = {
  name:      "Mid Rise Destructed '90s Loose Jeans",
  styleFlag: '60% off: really big deal',
  badge:     'Best Seller',
  rating:    4.5,
  reviews:   8700,
};

type Swatch = {
  name: string;
  hex: string;
  salePrice: string;
  origPrice: string;
  oos?: boolean;
};

// Grouped by price tier, matching the Figma swatch module layout
type SwatchGroup = { swatches: Swatch[] };

const SWATCH_GROUPS: SwatchGroup[] = [
  {
    swatches: [
      { name: 'Fresh White',    hex: '#f5f3ee', salePrice: '$16.99', origPrice: '$29.95' },
      { name: 'Light Wash',     hex: '#c8d8e8', salePrice: '$16.99', origPrice: '$29.95' },
    ],
  },
  {
    swatches: [
      { name: 'Medium Wash',    hex: '#8fa8c0', salePrice: '$16.99', origPrice: '$29.95' },
      { name: 'Dark Wash',      hex: '#4a637a', salePrice: '$29.95', origPrice: '$29.95' },
      { name: 'Indigo',         hex: '#3b4d6b', salePrice: '$29.95', origPrice: '$29.95' },
    ],
  },
  {
    swatches: [
      { name: 'Black',          hex: '#1a1a1a', salePrice: '$16.99', origPrice: '$29.95' },
      { name: 'Charcoal',       hex: '#4a4a4a', salePrice: '$16.99', origPrice: '$29.95' },
      { name: 'Grey',           hex: '#9e9e9e', salePrice: '$16.99', origPrice: '$29.95' },
      { name: 'Stone',          hex: '#c8b89a', salePrice: '$16.99', origPrice: '$29.95' },
      { name: 'Ecru',           hex: '#ede0c8', salePrice: '$16.99', origPrice: '$29.95', oos: true },
      { name: 'Olive',          hex: '#7c7c4e', salePrice: '$16.99', origPrice: '$29.95' },
      { name: 'Burgundy',       hex: '#7c2340', salePrice: '$16.99', origPrice: '$29.95' },
      { name: 'Forest',         hex: '#2d5a3d', salePrice: '$29.95', origPrice: '$29.95' },
      { name: 'Navy',           hex: '#1b2a4a', salePrice: '$29.95', origPrice: '$29.95' },
    ],
  },
];

const ALL_SWATCHES = SWATCH_GROUPS.flatMap(g => g.swatches);

type SizeGroup = {
  label: string;
  link: string;
  sizes: { label: string; oos?: boolean }[];
};

const SIZE_GROUPS: SizeGroup[] = [
  {
    label: 'Waist',
    link: 'Size Guide',
    sizes: [
      { label: '00' }, { label: '0', oos: true }, { label: '2', oos: true },
      { label: '4', oos: true }, { label: '6' }, { label: '8' },
      { label: '10' }, { label: '12' }, { label: '14' },
      { label: '16' }, { label: '18' }, { label: '20' },
    ],
  },
  {
    label: 'Length',
    link: 'Inseam Guide',
    sizes: [
      { label: '28"' }, { label: '29"', oos: true }, { label: '30"', oos: true },
      { label: '31"', oos: true }, { label: '32"' }, { label: '33"' },
      { label: '34"' }, { label: '36"' }, { label: '38"' },
      { label: '40"' }, { label: '42"' }, { label: '44"', oos: true },
    ],
  },
  {
    label: 'Fit',
    link: 'Fit Guide',
    sizes: [
      { label: 'Regular' }, { label: 'Tall', oos: true }, { label: 'Petite', oos: true },
      { label: 'Short', oos: true }, { label: 'Plus' }, { label: 'Extra Tall' },
      { label: 'Ankle' }, { label: 'Curvy' }, { label: 'Long' },
      { label: 'XL Tall' }, { label: 'XS Petite' }, { label: '2XL', oos: true },
    ],
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const pct = Math.round(Math.min(Math.max(rating - star + 1, 0), 1) * 100);
        return (
          <svg key={star} width="13" height="13" viewBox="0 0 13 13">
            <defs>
              <linearGradient id={`g${star}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset={`${pct}%`} stopColor={C.black} />
                <stop offset={`${pct}%`} stopColor="#d4d4d4" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#g${star})`}
              d="M6.5 0.5l1.5 3.1 3.4.5-2.45 2.4.58 3.38L6.5 8.25l-3.03 1.63.58-3.38L1.6 4.1l3.4-.5z"
            />
          </svg>
        );
      })}
    </div>
  );
}

function OosDiagonal() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
      <line x1="5" y1="95" x2="95" y2="5" stroke={C.borderGray} strokeWidth="1.5" />
    </svg>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function BuyBox() {
  const [imgIndex,       setImgIndex]       = useState(0);
  const [favorited,      setFavorited]      = useState(false);
  const [selectedIdx,    setSelectedIdx]    = useState(0);
  const [selectedSizes,  setSelectedSizes]  = useState<Record<string, string>>({});
  const [quantity,       setQuantity]       = useState(1);
  const [addedState,     setAddedState]     = useState<'idle' | 'adding' | 'added'>('idle');
  const [fulfillment,    setFulfillment]    = useState<'ship' | 'pickup'>('ship');

  const swatch      = ALL_SWATCHES[selectedIdx];
  const isOnSale    = swatch.salePrice !== swatch.origPrice;
  const pct         = isOnSale
    ? Math.round((1 - parseFloat(swatch.salePrice.slice(1)) / parseFloat(swatch.origPrice.slice(1))) * 100)
    : 0;
  const installment = (parseFloat(swatch.salePrice.slice(1)) / 4).toFixed(2);
  const allSizesChosen = SIZE_GROUPS.every(g => selectedSizes[g.label]);

  function toggleSize(group: string, size: string) {
    setSelectedSizes(prev => ({
      ...prev,
      [group]: prev[group] === size ? '' : size,
    }));
  }

  function handleAddToBag() {
    if (!allSizesChosen) return;
    setAddedState('adding');
    setTimeout(() => setAddedState('added'), 600);
    setTimeout(() => setAddedState('idle'), 3000);
  }

  const IMAGES = 9; // matches Figma dot count

  return (
    <div className="bg-white w-full max-w-[390px] mx-auto min-h-screen" style={{ fontFamily: 'Arial, sans-serif' }}>

      {/* ── 1. Title + Style Flag (above image) ────────────────────────── */}
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-[22px] font-normal leading-tight" style={{ color: C.black }}>
          {PRODUCT.name}
        </h1>
        <p className="text-[14px] mt-1" style={{ color: C.grayText }}>
          {PRODUCT.styleFlag}
        </p>
      </div>

      {/* ── 2. Product Image Carousel ───────────────────────────────────── */}
      <div className="relative bg-gray-100 overflow-hidden">
        {/* Images */}
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${imgIndex * 100}%)` }}
        >
          {Array.from({ length: IMAGES }).map((_, i) => (
            <div
              key={i}
              className="min-w-full aspect-[3/4] flex items-center justify-center relative"
              style={{ background: i === 0 ? `${swatch.hex}44` : '#f5f5f5' }}
            >
              {i === 0 ? (
                // Hero image placeholder — styled to feel like a model photo
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <div
                    className="w-40 h-56 rounded-sm flex items-center justify-center text-xs"
                    style={{ background: swatch.hex, color: '#00000066', border: `1px solid ${swatch.hex}88` }}
                  >
                    {swatch.name}
                  </div>
                </div>
              ) : (
                <div className="text-sm text-gray-400">View {i + 1}</div>
              )}
            </div>
          ))}
        </div>

        {/* Badge bottom-left */}
        <div className="absolute bottom-3 left-3 bg-white text-[11px] font-semibold px-2 py-0.5 shadow-sm">
          {PRODUCT.badge}
        </div>

        {/* Favorite top-right */}
        <button
          onClick={() => setFavorited(f => !f)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"
          aria-label="Favorite"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={favorited ? '#e10000' : 'none'} stroke={favorited ? '#e10000' : '#757575'} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Dot nav */}
      <div className="flex items-center justify-center gap-1.5 py-2.5">
        {Array.from({ length: IMAGES }).map((_, i) => (
          <button
            key={i}
            onClick={() => setImgIndex(i)}
            className="transition-all rounded-full"
            style={{
              width:  i === imgIndex ? 16 : 6,
              height: 6,
              background: i === imgIndex ? C.black : C.borderGray,
            }}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Content wrapper with 16px side padding ─────────────────────── */}
      <div className="px-4 space-y-5 pb-8">

        {/* ── 3. Price + Rating ─────────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-2">
          {/* Left: price block */}
          <div>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              {isOnSale && (
                <span className="text-[16px] line-through" style={{ color: C.grayText }}>
                  {swatch.origPrice}
                </span>
              )}
              <span className="text-[14px]" style={{ color: C.grayDark }}>
                {pct}% off
              </span>
            </div>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-[16px] font-normal" style={{ color: C.red }}>
                {swatch.salePrice}
              </span>
              {isOnSale && (
                <>
                  <span className="text-[16px]" style={{ color: C.black }}>–</span>
                  <span className="text-[16px]" style={{ color: C.black }}>{swatch.origPrice}</span>
                </>
              )}
            </div>
            <p className="text-[14px] mt-0.5" style={{ color: C.grayText }}>
              Extra 10$ off | Final Sale
            </p>
          </div>

          {/* Right: rating */}
          <div className="flex flex-col items-end gap-1 shrink-0">
            <StarRating rating={PRODUCT.rating} />
            <button
              className="text-[12px] underline"
              style={{ color: C.black }}
            >
              {(PRODUCT.reviews / 1000).toFixed(1)}k
            </button>
          </div>
        </div>

        {/* ── 4. Color Swatch Module ─────────────────────────────────────── */}
        <div>
          {/* "Color Fresh white" label */}
          <p className="text-[14px] mb-3" style={{ color: C.black }}>
            Color <span className="ml-0.5">{swatch.name}</span>
          </p>

          {/* Swatch groups — each group preceded by its shared price */}
          <div className="space-y-3">
            {SWATCH_GROUPS.map((group, gi) => {
              // Determine price range for this group
              const prices = group.swatches.map(s => parseFloat(s.salePrice.slice(1)));
              const minP = Math.min(...prices);
              const maxP = Math.max(...prices);
              const origP = group.swatches[0].origPrice;
              const priceLabel = minP === maxP
                ? `$${minP.toFixed(2)}`
                : `$${minP.toFixed(2)} – $${maxP.toFixed(2)}`;

              return (
                <div key={gi}>
                  {/* Price header */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-[14px] line-through" style={{ color: C.grayText }}>{origP}</span>
                    <span className="text-[14px]" style={{ color: C.red }}>{priceLabel}</span>
                  </div>

                  {/* Swatches row */}
                  <div className="flex flex-wrap gap-2">
                    {group.swatches.map((sw) => {
                      const idx = ALL_SWATCHES.indexOf(sw);
                      const selected = idx === selectedIdx;
                      return (
                        <button
                          key={sw.name}
                          onClick={() => !sw.oos && setSelectedIdx(idx)}
                          disabled={sw.oos}
                          aria-label={sw.name}
                          className="relative flex-shrink-0"
                          style={{
                            width: 40,
                            height: 40,
                            background: sw.hex,
                            border: selected
                              ? `2px solid ${C.black}`
                              : `1px solid ${C.borderGray}`,
                            outline: selected ? `1px solid ${C.black}` : 'none',
                            outlineOffset: 1,
                            opacity: sw.oos ? 0.45 : 1,
                          }}
                        >
                          {sw.oos && <OosDiagonal />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 5. Multi-Size Selector (3 groups) ─────────────────────────── */}
        <div className="space-y-5">
          {SIZE_GROUPS.map((group) => {
            const chosen = selectedSizes[group.label];
            return (
              <div key={group.label}>
                {/* Group header */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[14px]" style={{ color: C.black }}>
                    {group.label}
                  </span>
                  <button
                    className="text-[14px] underline"
                    style={{ color: C.black }}
                  >
                    {group.link}
                  </button>
                </div>

                {/* Size grid — 6 columns, 53px buttons */}
                <div
                  className="grid gap-x-[6px] gap-y-[8px]"
                  style={{ gridTemplateColumns: 'repeat(6, 53px)' }}
                >
                  {group.sizes.map(({ label, oos }) => {
                    const isSelected = chosen === label;
                    return (
                      <button
                        key={label}
                        onClick={() => !oos && toggleSize(group.label, label)}
                        disabled={oos}
                        className="relative flex items-center justify-center text-[14px] overflow-hidden"
                        style={{
                          height: 40,
                          background: isSelected ? C.black : C.white,
                          color: isSelected ? C.white : oos ? C.borderGray : C.black,
                          border: `1px solid ${isSelected ? C.black : C.borderGray}`,
                          cursor: oos ? 'default' : 'pointer',
                        }}
                      >
                        {label}
                        {oos && <OosDiagonal />}
                      </button>
                    );
                  })}
                </div>

                {!chosen && (
                  <p className="text-[12px] mt-1.5" style={{ color: C.grayText }}>
                    Select a {group.label.toLowerCase()}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* ── 6. Scarcity ───────────────────────────────────────────────── */}
        <p className="text-[14px]" style={{ color: C.black }}>
          Only a few left
        </p>

        {/* ── 7. Add to Bag ─────────────────────────────────────────────── */}
        <div>
          {/* CTA row: quantity dropdown + button */}
          <div className="flex h-[44px]">
            {/* Quantity dropdown */}
            <div
              className="flex items-center justify-between px-3 shrink-0 cursor-pointer"
              style={{
                width: 64,
                border: `1px solid ${C.borderGray}`,
                borderRight: 'none',
                background: C.white,
              }}
            >
              <select
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
                className="appearance-none bg-transparent text-[14px] w-full cursor-pointer outline-none"
                style={{ color: C.black }}
              >
                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="shrink-0 -ml-2 pointer-events-none">
                <path d="M1 1l4 4 4-4" stroke={C.black} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Add to Bag button */}
            <button
              onClick={handleAddToBag}
              disabled={!allSizesChosen}
              className="flex-1 flex items-center justify-center text-[14px] font-normal transition-all"
              style={{
                background: addedState === 'added'
                  ? '#2e7d32'
                  : !allSizesChosen
                  ? '#999'
                  : C.gapBlue,
                color: C.white,
                cursor: allSizesChosen ? 'pointer' : 'not-allowed',
              }}
            >
              {addedState === 'added' ? '✓ Added to Bag' : 'Add to Bag'}
            </button>
          </div>

          {/* Afterpay line */}
          <p className="text-[12px] mt-2 text-center" style={{ color: C.black }}>
            4 interest-free payments of ${installment} with PayPal or Afterpay
          </p>
        </div>

        {/* ── 8. Fulfillment ────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              id:    'ship' as const,
              title: 'Free shipping',
              body:  'on $50+ for Rewards Members.',
              link:  '[Link label]',
              badge: 'In Stock',
            },
            {
              id:    'pickup' as const,
              title: 'In-store pickup',
              body:  '',
              link:  '[Link label]',
              badge: '',
            },
          ].map(({ id, title, body, link, badge }) => (
            <button
              key={id}
              onClick={() => setFulfillment(id)}
              className="text-left p-3 transition-colors"
              style={{
                border: `1px solid ${fulfillment === id ? C.black : C.borderGray}`,
                background: fulfillment === id ? '#f5f5f5' : C.white,
              }}
            >
              <p className="text-[14px] font-normal" style={{ color: C.black }}>{title}</p>
              {body && <p className="text-[14px]" style={{ color: C.black }}>{body}</p>}
              <p className="text-[14px] underline" style={{ color: C.black }}>{link}</p>
              {badge && (
                <p className="text-[14px] mt-1" style={{ color: C.black }}>{badge}</p>
              )}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

// =============================================================================
// TITLE:       Main
// DESCRIPTION: Main javascript file used to load in dependencies and project js code
// =============================================================================

// === Imports =================================================================
// Using gulp-include:
// https://www.npmjs.org/package/gulp-include
// -----------------------------------------------------------------------------
// include mobile-fixes.js
// include ../vendor/modernizr/modernizr.js
// include ../vendor/jquery/dist/jquery.js



// === JS Goes here ============================================================



// === Onload Shenanigans ======================================================
// Fires good old js on page load
(function(){
  console.log( "JavaScript Fired" );
})();

// jQuery DOMonReady stuff
$(function() {
  console.log( "Document ready fired!" );
  console.log( Date.now() );
});

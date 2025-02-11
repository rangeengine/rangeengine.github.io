
**************
Materials
**************

Game Settings
=============

.. figure:: /images/editors-properties-materials-game_settings.png

   Game Settings panel. `Video <https://www.youtube.com/watch?v=z8_PzIYJ5QQ>`__

This panel contains properties that control how the object surfaces
that use the material are rendered in real-time by the Range Engine.

Backface Culling
   Hide the back-faces of objects rendered with this material.
   If "Off", both sides of the surface are visible (at the expense of lower rendering speed).
   Note that this setting is applied per material and not per face; e.g.
   if the material is applied to a cube, only the back and front faces of the cube are visible,
   and not both sides of each face.

Invisible
   Hide all faces of objects rendered with this material.

Text
   Use material as Text object in the Game Engine.

Alpha Blend
   Controls how the alpha channel is used to create a transparent texture in the rendered image.

   Alpha Sort
      Orders the sequence in which transparent objects are drawn on top of each other,
      so that ones in front receive more light than ones behind.
   Alpha Blend
      Uses the alpha values present in the bitmap image sourced in the Image slot.
   Alpha Clip
      Uses the alpha channel as a simple mask.
   Add
      Render face transparent and add color of face.
   Opaque (default)
      All alpha values are ignored; the scene is completely non-transparent.


Face Orientation
================

Provides options regarding the orientation (i.e. rotation transformation)
of faces to which the material is applied.

   Shadow
      Faces are used for shadow.
   Billboard
      Billboard with Z-axis constraint.
   Halo
      Screen-aligned billboard.
   Normal (default)
      No transformation.

Foliage Shader
==============
The **foliage shader** is a specialized type of shader used to render plant materials like leaves, grass, and trees. It simulates wind animation, helping to create more lifelike vegetation in games.

   Foliage Strength:
      How much the Object will move from its original position

   Foliage Turbulence:
      Motion cycle speed

   Grass:
      Lock the vertices under the object origin

Custom Viewport Shader (VP Shader)
==================================

This module shows the usage and parameters that can be used to create custom shaders for materials, they are compatible with the editor and game engine runtime.

   .. figure:: /images/VP_Shaders.png

   .. note::
      It is possible to change the Vertex and Fragment shader of the material.

   Vertex Code:

   .. code-block:: c++

      void vertex() 
      {
         VERTEX += vec3(1.0, 1.0, 1.0);
      }

   All Vertex parameters:

      .. code-block:: c++
         
         vec3 VERTEX;
         vec3 NORMAL;
         float TIME;

   Fragment Code:

   .. code-block:: c++

      void fragment() 
      {
         ALBEDO += vec3(1.0, 1.0, 1.0);
      }

   All Fragment parameters:

      .. code-block:: c++

         float VERTEX_ID, OBJECT_INDEX, MATERIAL_INDEX, RANDOM_INDEX;
         float      TIME,      IOR, FRESNEL,     EMIT,   ALPHA;
         float WORLD_ENERGY, MIST_START, MIST_END, MIST_MIN, MIST_TYPE;
         vec2 UV;
         vec3 ALBEDO, SPECULAR_RGB, EMIT_RGB,   ORCO, NORMAL, VIEW, OBJECT_POS, CAMERA_POS;
         vec3 MIST_COLOR, HORIZON_COLOR, ZENITH_COLOR, GROUND_COLOR;
         vec4 TANGENT, VERTEX_COLOR, OBJECT_COLOR;
         float ROUGHNESS, METALLIC, DIFFUSE, SPECULAR, AMBIENT;
         mat4 MODEL_MATRIX, VIEW_MATRIX, INV_VIEW_MATRIX;

   Basic shader, use the .vert or .frag extension to enable the material shader compile button.

   .. figure:: /images/VP_Shaders_Vert.png

   .. figure:: /images/VP_Shaders_Frag.png
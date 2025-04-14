KX_2DFilterManager(EXP_PyObjectPlus)
====================================

base class --- :class:`EXP_PyObjectPlus`

.. class:: KX_2DFilterManager(EXP_PyObjectPlus)

   2D filter manager used to add, remove and find filters in a scene.

   .. method:: addFilter(index, type, fragmentProgram)

      Add a filter to the pass index :data:`index`, type :data:`type` and fragment program if custom filter.

      :arg index: The filter pass index.
      :type index: integer
      :arg type: The filter type, one of:

         * :data:`bge.logic.RAS_2DFILTER_BLUR`
         * :data:`bge.logic.RAS_2DFILTER_DILATION`
         * :data:`bge.logic.RAS_2DFILTER_EROSION`
         * :data:`bge.logic.RAS_2DFILTER_SHARPEN`
         * :data:`bge.logic.RAS_2DFILTER_LAPLACIAN`
         * :data:`bge.logic.RAS_2DFILTER_PREWITT`
         * :data:`bge.logic.RAS_2DFILTER_SOBEL`
         * :data:`bge.logic.RAS_2DFILTER_GRAYSCALE`
         * :data:`bge.logic.RAS_2DFILTER_SEPIA`
         * :data:`bge.logic.RAS_2DFILTER_CUSTOMFILTER`

      :type type: integer
      :arg fragmentProgram: The filter shader fragment program.
          Used only if :data:`type` is :data:`bge.logic.RAS_2DFILTER_CUSTOMFILTER`, if empty or not specified the filter is created without shader, waiting call to :data:`BL_Shader.setSourceList`. (optional)
      :type fragmentProgram: string
      :return: The 2D Filter.
      :rtype: :class:`KX_2DFilter`

   .. method:: removeFilter(index)

      Remove filter to the pass index :data:`index`.

      :arg index: The filter pass index.
      :type index: integer

   .. method:: getFilter(index)

      Return filter to the pass index :data:`index`.

      :warning: If the 2D Filter is added with a :class:`SCA_2DFilterActuator`, the filter will
          be available only after the 2D Filter program is linked. The python script to get the filter
          has to be executed one frame later. A delay sensor can be used.

      :arg index: The filter pass index.
      :type index: integer
      :return: The filter in the specified pass index or None.
      :rtype: :class:`KX_2DFilter` or None

   *******
   Shaders
   *******

   .. method:: changeTonemapValues(enabled, exposure, gamma, saturation, temperature)

      Changes the parameters of the Tonemap shader.

      :arg enabled: enable/disable shader
      :type enabled: bool

      :arg exposure: change exposure.
      :type exposure: float

      :arg gamma: change gamma.
      :type gamma: float

      :arg saturation: change saturation.
      :type saturation: float

      :arg temperature: change temperature.
      :type temperature: float

   .. method:: changeBloomValues(enabled, intensity, threshold)

      Changes the parameters of the Bloom shader.

      :arg enabled: enable/disable shader
      :type enabled: bool

      :arg exposure: change intensity.
      :type exposure: float

      :arg gamma: change threshold.
      :type gamma: float

   .. method:: changeLightScatterValues(enabled, step_max, step_size, threshold, intensity)

      Changes the parameters of the Light Scattering shader.

      :arg enabled: enable/disable shader
      :type enabled: bool

      :arg exposure: change step_max.
      :type exposure: float

      :arg gamma: change step_size.
      :type gamma: float

      :arg gamma: change threshold.
      :type gamma: float

      :arg gamma: change intensity.
      :type gamma: float

   .. method:: changeSSRValues(enabled, step_max, bias, max_distance)

      Changes the parameters of the SSR shader.

      :arg enabled: enable/disable shader
      :type enabled: bool

      :arg exposure: change step_max.
      :type exposure: float

      :arg gamma: change bias.
      :type gamma: float

      :arg gamma: change max_distance.
      :type gamma: float

   .. method:: changeSSAOValues(enabled, samples, strength, distance, attenuation, use_gi=0, gi_irradiance=0)

      Changes the parameters of the SSAO shader.

      :arg enabled: enable/disable shader
      :type enabled: bool

      :arg samples: change samples.
      :type samples: float

      :arg strength: change strength.
      :type strength: float

      :arg distance: change distance.
      :type distance: float

      :arg attenuation: change attenuation.
      :type attenuation: float

      :arg use_gi: enanble/disable SSAO Global Illumination.
      :type use_gi: bool

      :arg attenuation: change SSAO Global Illumination irradiance.
      :type attenuation: float

   .. method:: fxaa(enabled)

      Enable/Disable fxaa.

      :arg enabled: enable/disable fxaa
      :type enabled: bool

   .. method:: changeVignetteValues(enabled, size, radius)

      Changes the parameters of the Vignetter shader.

      :arg enabled: enable/disable shader
      :type enabled: bool

      :arg exposure: change size.
      :type exposure: float

      :arg gamma: change radius.
      :type gamma: float

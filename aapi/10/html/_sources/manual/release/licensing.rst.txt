
**************************
Licensing of Games
**************************

Blender and the UPBGE/BGE are licensed as GNU GPL, which means that your games
(if they include Blender software) have to comply with that license as well.
This only applies to the software, or the bundle if it has software in it, not 
to the artwork you make with Blender. All your Blender creations are your sole property.

GNU GPL -- also called "Free Software" -- is a license that aims at keeping the licensed 
software free, forever. GNU GPL does not allow you to add new restrictions or limitations 
on the software you received under that license. That works fine if you want your clients 
or your audience to have the same rights as you have (with Blender).

In summary, the software and source code are bound to the GNU GPL, but the blend-files
(models, textures, sounds) are not.


Standalone Games
================

In case you save out your game as a single standalone (using addons for this purpose, 
for example), the blend-file gets included in the binary (the Blender Player). That requires 
the blend-file to be compatible with the GNU GPL license.

In this case, you could decide to load and run another blend-file game (using the Game Actuator logic brick).
That file then is not part of the binary, so you can apply any license you wish on it.


More Information
================

More information you can find in the `blender.org FAQ <https://www.blender.org/support/faq/>`__.

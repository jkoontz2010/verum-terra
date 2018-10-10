const METAL = "Metal";
const LUMBER = "Lumber";
const ROPE = "Rope";
const GLOW_STONE = "Glow Stone";
const FELUGIO_SEPTIA = "Felugio Septia";
const GLASS = "Glass";
const DRAGON_EYE = "Dragon Eye";
const HAMMER = "Hammer";
const FOOD_RATION = "Food Ration";
const LEATHER = "Leather";
const IRON_ORE ="Iron Ore";
const NAILS = "Nails";
const COTTON = "Cotton";
const OLD_CLOTH = "Old Cloth";
const FIRE = "Fire";

export const specialCards = [{ name: "Harpoon", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/cards.png?alt=media&token=31e96604-b5b8-4344-ab10-99857d221245",
requirements: [
        {forgeCard: LUMBER, quantity: 1},
        {forgeCard: ROPE, quantity: 1},
        {forgeCard: METAL, quantity: 1}
    ]},



{ name: "250 Battle Points", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/1000BattlePoints.JPG?alt=media&token=bab43c9d-675f-4441-96c1-3bb5f9132c77", 
requirements: [
    {forgeCard: DRAGON_EYE, quantity: 1},
    {forgeCard: FIRE, quantity: 1}
]},
{ name: "1000 Battle Points", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/1000BattlePoints.JPG?alt=media&token=bab43c9d-675f-4441-96c1-3bb5f9132c77", 
requirements: [
    {forgeCard: GLOW_STONE, quantity: 1},
    {forgeCard: FIRE, quantity: 1},
    {forgeCard: DRAGON_EYE, quantity: 2}
]},
{ name: "Chopped", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Chopped.JPG?alt=media&token=0cb9976f-ef38-451b-beb1-666de4f3025b",
    requirements: [
    {forgeCard: HAMMER, quantity: 1},
    {forgeCard: LUMBER, quantity: 1},
    {forgeCard: METAL, quantity: 1}
]},
{ name: "Deflection", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Deflection.JPG?alt=media&token=39bb02bf-a172-4de8-bb7e-76751e468275", 
requirements: [
    {forgeCard: METAL, quantity: 1},
    {forgeCard: DRAGON_EYE, quantity: 1}
]},
{ name: "Instant Access", icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/InstantAccess.JPG?alt=media&token=69461ade-6885-4136-9029-9784867a904c",
requirements: [
    {forgeCard: METAL, quantity: 2},
    {forgeCard: NAILS, quantity: 1}
]},
{ name: "Shard of Scroll", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/ShardOfScroll.png?alt=media&token=9496da65-6bec-4008-bcf9-a5db79ec1279", 
requirements: [
    {forgeCard: OLD_CLOTH, quantity: 2},
    {forgeCard: FIRE, quantity: 1}
]},
{ name: "Shield", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Shield.JPG?alt=media&token=aea1a0fb-39a0-456f-9c41-a383ed5538cf",
requirements: [
    {forgeCard: LEATHER, quantity: 1},
    {forgeCard: METAL, quantity: 1}
]},
{ name: "Spear", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Spear.JPG?alt=media&token=b337dbdd-7ed4-42f3-b451-fe78c0ff3494", 
requirements: [
    {forgeCard: METAL, quantity: 1}, 
    {forgeCard: LUMBER, quantity: 1},
    {forgeCard: ROPE, quantity: 1}
]},
{ name: "Sword", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Sword.JPG?alt=media&token=2d8ee977-a293-409c-b2b5-ba50604142ad", 
requirements: [
    {forgeCard: METAL, quantity: 1},
    {forgeCard: HAMMER, quantity: 1},
    {forgeCard: FIRE, quantity: 1}
]},
{ name: "Double XP", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/DoubleXP.PNG?alt=media&token=4e5c6144-1b96-4dc5-a766-d90afb2c0c4a", 
requirements: [
    {forgeCard: DRAGON_EYE, quantity: 1},
    {forgeCard: GLOW_STONE, quantity: 1},
    {forgeCard: OLD_CLOTH, quantity: 1}
]},
{ name: "Purge", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Purge.PNG?alt=media&token=81eabd44-f1c1-4d26-b79a-10b415543e23", 
requirements: [
    {forgeCard: DRAGON_EYE, quantity: 1},
    {forgeCard: GLOW_STONE, quantity: 1},
    {forgeCard: OLD_CLOTH, quantity: 1},
    {forgeCard: FIRE, quantity: 2}
]},
{ name: "Thief", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Thief.PNG?alt=media&token=03a8e502-5f5f-4c3e-8bed-7d4d812ddcbd", 
requirements: [
    {forgeCard: DRAGON_EYE, quantity: 1},
    {forgeCard: ROPE, quantity: 1},
    {forgeCard: COTTON, quantity: 2},
    {forgeCard: OLD_CLOTH, quantity: 1}
]},
{ name: "XP Freeze", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/XPFreeze.PNG?alt=media&token=3a12c403-6eb6-428e-b3f6-fc0a07a9179c", 
requirements: [
    {forgeCard: DRAGON_EYE, quantity: 2},
    {forgeCard: FELUGIO_SEPTIA, quantity: 1},
    {forgeCard: GLASS, quantity: 2}
]},
{ name: "Pick Pocket", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/PickPocketCard.jpeg?alt=media&token=ada6dbe1-d90e-4128-8bde-dce02792f71f", 
requirements: [
    {forgeCard: LEATHER, quantity: 1},
    {forgeCard: FELUGIO_SEPTIA, quantity: 1},
    {forgeCard: COTTON, quantity: 1},
    {forgeCard: OLD_CLOTH, quantity: 2}
]},
{ name: "Anonymous", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Anonymous.PNG?alt=media&token=f7e01533-fdc6-4775-8604-694d6491c8f9", 
requirements: [
    {forgeCard: DRAGON_EYE, quantity: 1},
    {forgeCard: OLD_CLOTH, quantity: 1},
    {forgeCard: FIRE, quantity: 2}
]},
{ name: "Bombs Away", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/BombsAway.PNG?alt=media&token=3fba7ba8-aafc-4e11-a711-8e01fc5d9ee5", 
requirements: [
    {forgeCard: METAL, quantity: 1},
    {forgeCard: ROPE, quantity: 1},
    {forgeCard: FIRE, quantity: 2}
]},
{ name: "Health Potion", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/HealthPotion.PNG?alt=media&token=caa5671a-25ab-49cb-a492-f42be6b443bf", 
requirements: [
    {forgeCard: DRAGON_EYE, quantity: 1},
    {forgeCard: FOOD_RATION, quantity: 2},
    {forgeCard: GLASS, quantity: 1}
]},
{ name: "Smoke Screen", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/SmokeScreen.PNG?alt=media&token=4edb5fe0-d43e-4577-bb97-f1efa85c178e", 
requirements: [
    {forgeCard: DRAGON_EYE, quantity: 1},
    {forgeCard: OLD_CLOTH, quantity: 2},
    {forgeCard: FIRE, quantity: 2}
]},
{ name: "Time Shift", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/TimeShift.PNG?alt=media&token=a4eca151-5746-474e-9c4d-4856c2ff67c3", 
requirements: [
    {forgeCard: GLOW_STONE, quantity: 2},
    {forgeCard: OLD_CLOTH, quantity: 1},
    {forgeCard: FIRE, quantity: 2}
]},
{ name: "Attack Multiplier", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/AttackMultiplier.png?alt=media&token=76faad4f-887a-46d3-9ffa-47030b231e55", 
requirements: [
    {forgeCard: FOOD_RATION, quantity: 1},
    {forgeCard: GLASS, quantity: 1},
    {forgeCard: FIRE, quantity: 1}
]},
{ name: "Slice and Dice", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/SliceAndDice.PNG?alt=media&token=c5c61f88-7bef-4a72-8995-c48365a2945f", 
requirements: [
    {forgeCard: HAMMER, quantity: 1},
    {forgeCard: LUMBER, quantity: 1},
    {forgeCard: METAL, quantity: 2}
]},
{ name: "Staff of Wisdom", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/StaffOfWisdom.png?alt=media&token=5ff51b78-3092-440b-958a-619a9bf6b2cb", 
requirements: [
    {forgeCard: DRAGON_EYE, quantity: 1},
    {forgeCard: GLOW_STONE, quantity: 1},
    {forgeCard: LUMBER, quantity: 1}
]},
{ name: "Strategy Session", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/StrategySession.png?alt=media&token=2fff7fbe-82e4-4cfd-9084-360abda7d566", 
requirements: [
    {forgeCard: DRAGON_EYE, quantity: 1},
    {forgeCard: GLOW_STONE, quantity: 2},
    {forgeCard: GLASS, quantity: 1}
]},
{ name: "Wand of Wonder",
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/WandOfWonder.png?alt=media&token=d9b163b6-afe6-4aff-bd0f-92692696275d", 
requirements: [
    {forgeCard: LUMBER, quantity: 1},
    {forgeCard: GLOW_STONE, quantity: 1},
    {forgeCard: FIRE, quantity: 1},
    {forgeCard: DRAGON_EYE, quantity: 2}
]},
{ name: "Clarity", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/ClarityCard.png?alt=media&token=f2682dc9-ebee-435b-960a-a7f16ead8a98", 
requirements: [
    {forgeCard: DRAGON_EYE, quantity: 3},
    {forgeCard: GLOW_STONE, quantity: 1},
    {forgeCard: FIRE, quantity: 1}
]},
{ name: "Fire and Ice", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/FireAndIce.PNG?alt=media&token=80f1c506-0ac3-4f57-88f4-1124971512cf", 
requirements: [
    {forgeCard: GLOW_STONE, quantity: 1},
    {forgeCard: GLASS, quantity: 1},
    {forgeCard: FIRE, quantity: 1}
]},
{ name: "Insta-Blast", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/InstaBlast.PNG?alt=media&token=4a3d84b8-3184-458f-88d4-f07b75765614", 
requirements: [
    {forgeCard: GLOW_STONE, quantity: 2},
    {forgeCard: METAL, quantity: 1},
    {forgeCard: GLASS, quantity: 1}
]},
{ name: "Mountain Top", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/MountainTop.PNG?alt=media&token=38e0a0ab-c548-49fa-a36b-7c83bff2f182", 
requirements: [
    {forgeCard: IRON_ORE, quantity: 5}
]},
{ name: "Power Stone", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/PowerStone.PNG?alt=media&token=0f14186f-bf04-4911-9802-cd1031ebd4fc", 
requirements: [
    {forgeCard: DRAGON_EYE, quantity: 1},
    {forgeCard: GLOW_STONE, quantity: 3}
]},
{ name: "Skeleton Key", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/SkeletonKey.PNG?alt=media&token=06fd8749-9ff1-40e9-bdd9-dc6ca15b9271", 
requirements: [
    {forgeCard: DRAGON_EYE, quantity: 1},
    {forgeCard: HAMMER, quantity: 2},
    {forgeCard: METAL, quantity: 1},
    {forgeCard: FIRE, quantity: 1}
]},
{ name: "Song of Fortune", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/SongOfFortune.PNG?alt=media&token=7b460c63-d9b1-4893-b497-9a56d0dca432", 
requirements: [
    {forgeCard: METAL, quantity: 1},
    {forgeCard: ROPE, quantity: 1},
    {forgeCard: FIRE, quantity: 1}
]},
{ name: "Thinking Cap", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/ThinkingCap.PNG?alt=media&token=407d4ea1-d8ae-4b69-96ae-0f38f713e399", 
requirements: [
    {forgeCard: METAL, quantity: 2},
    {forgeCard: OLD_CLOTH, quantity: 1}
]},
{ name: "Tipping Point", 
icon: "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/TippingPoint.PNG?alt=media&token=0b46c54b-8d01-4326-b3d2-2f19e3220120", 
requirements: [
    {forgeCard: HAMMER, quantity: 1},
    {forgeCard: METAL, quantity: 2},
    {forgeCard: NAILS, quantity: 1},
    {forgeCard: ROPE, quantity: 1}
]},
]
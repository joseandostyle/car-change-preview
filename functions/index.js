const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Notificar al abrir un nuevo chat
exports.onConversationCreate = functions.firestore
  .document('conversations/{convId}')
  .onCreate(async (snap, ctx) => {
    const data = snap.data();
    const [userA, userB] = data.participants;
    const creator = ctx.auth ? ctx.auth.uid : null;
    const other = creator === userA ? userB : userA;
    const payload = {
      notification: {
        title: 'Nuevo chat iniciado',
        body: 'Tienes una nueva conversación en CarChange',
      },
      data: { conversationId: ctx.params.convId }
    };
    // Obtiene tokens FCM del otro usuario
    const tokensSnap = await admin.firestore()
      .collection('users').doc(other).collection('fcmTokens').get();
    const tokens = tokensSnap.docs.map(d => d.id);
    if (tokens.length) {
      await admin.messaging().sendToDevice(tokens, payload);
    }
  });

// Notificar al recibir un nuevo mensaje
exports.onMessageCreate = functions.firestore
  .document('conversations/{convId}/messages/{msgId}')
  .onCreate(async (snap, ctx) => {
    const message = snap.data();
    const convSnap = await admin.firestore()
      .collection('conversations').doc(ctx.params.convId).get();
    const conv = convSnap.data();
    const other = conv.participants.find(u => u !== message.senderId);
    const payload = {
      notification: {
        title: 'Nuevo mensaje',
        body: message.content.slice(0, 50),
      },
      data: { conversationId: ctx.params.convId }
    };
    // Obtiene tokens FCM del otro usuario
    const tokensSnap = await admin.firestore()
      .collection('users').doc(other).collection('fcmTokens').get();
    const tokens = tokensSnap.docs.map(d => d.id);
    if (tokens.length) {
      await admin.messaging().sendToDevice(tokens, payload);
    }
  });
